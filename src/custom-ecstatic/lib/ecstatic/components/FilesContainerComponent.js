import React, {Fragment} from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FilesContainer } from './FilesContainer'
import FileComponent from './FileComponent'
import FileListHeaderComponent from './FileListHeaderComponent'
import { sortByModifiedTime } from '../utils'
import FlipMove from 'react-flip-move'
import { handleFetchDirectory } from '../actions/currentDirectory'

const minWidthThreshold = 720

class FilesContainerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: minWidthThreshold,
            height: 0,
            visible: true,
            visibleContent: this.props.visibleContent,
            displayMode: this.props.displayMode,
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)   
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    componentDidUpdate(prevProps) {
        const { dispatch } = this.props        
        if(prevProps.location.pathname != this.props.location.pathname) {
            dispatch(handleFetchDirectory(this.props.location.pathname))
        } else if(prevProps.visibleContent != this.props.visibleContent || 
            prevProps.keyword != this.props.keyword || 
            prevProps.displayMode != this.props.displayMode) {
            this.setState(() => ({
                visible: false
            }))
            setTimeout(this.transitionEndCallback.bind(this), 300);
        }
    }

    // update width to exclude side bars
    updateWindowDimensions() {
        let newWidth = (window.innerWidth) - 180 * 2;
        if (newWidth < minWidthThreshold) newWidth += 180
        if (newWidth < minWidthThreshold) newWidth += 180
        this.setState({ width: newWidth, height: window.innerHeight });
    }

    transitionEndCallback = () => {
        this.setState(() => ({
            visibleContent: this.props.visibleContent,
            visible: true,
            displayMode: this.props.displayMode
        }))
    }

    render() {
        const { pathName } = this.props
        const { displayMode } = this.state
        const { width, visibleContent, visible } = this.state

        return (
            <Fragment>
                <FileListHeaderComponent 
                    pathName={pathName}
                    width={width + "px"}    
                    />                    
                <FilesContainer
                    width={width + "px"}
                    layoutmode={displayMode}
                    visible={visible}
                    >
                        {visibleContent.map((file, i) => (
                            <FileComponent key={file.key}
                                file={file}
                                index={i}
                                displayMode={displayMode}
                            />
                        ))}
                    
                </FilesContainer>
            </Fragment>
        )
    }
}

// function to compare lists via key
function compareList(prevList, afterList) {
    if(prevList.length != afterList.length) return false
    for(let i = 0; i < prevList.length; ++i) {
        if(prevList[i].key != afterList[i].key) {
            return false
        }
    }
    return true
}

function mapStateToProps({currentDirectory, viewState}) {
    const { pathName, keyword } = currentDirectory
    return {
        visibleContent: currentDirectory.visibleContent,
        pathName,
        displayMode: viewState.displayMode,
        keyword,
    }
}

export default withRouter(connect(mapStateToProps)(FilesContainerComponent))