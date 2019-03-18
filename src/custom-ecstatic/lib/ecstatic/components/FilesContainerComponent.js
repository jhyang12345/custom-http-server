import React, {Fragment} from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FilesContainer } from './FilesContainer'
import FileComponent from './FileComponent'
import FileListHeaderComponent from './FileListHeaderComponent'
import { sortByModifiedTime } from '../utils/utils'
import FlipMove from 'react-flip-move'
import { handleFetchDirectory } from '../actions/currentDirectory'

const minWidthThreshold = 680

class FilesContainerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: minWidthThreshold,
            height: 0,
            animate: false,
            content: this.props.currentDirectory.content,
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        const { dispatch, url } = this.props
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
        }
    }

    // update width to exclude side bars
    updateWindowDimensions() {
        let newWidth = (window.innerWidth) - 240 * 2;
        if (newWidth < minWidthThreshold) newWidth += 240
        if (newWidth < minWidthThreshold) newWidth += 240
        this.setState({ width: newWidth, height: window.innerHeight });
    }

    render() {
        console.log("Rerendering filecontainercomponent")
        const { displayMode } = this.props
        const { pathName, visibleContent } = this.props.currentDirectory
        const { width } = this.state

        const directoryContent = visibleContent;        

        return (
            <Fragment>
                <FileListHeaderComponent 
                    pathName={pathName}
                    width={width + "px"}    
                    />                    
                <FilesContainer
                    width={width + "px"}
                    layoutmode={displayMode}>
                        {directoryContent.map((file, i) => (
                            <FileComponent key={file.key}
                                file={file}
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
    return {
        currentDirectory,
        displayMode: viewState.displayMode,
    }
}

export default withRouter(connect(mapStateToProps)(FilesContainerComponent))