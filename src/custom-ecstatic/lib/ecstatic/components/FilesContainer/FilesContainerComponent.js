import React, {Fragment} from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FilesContainer from '../FilesContainer'
import FileComponent from '../FileComponent'
import FileList from '../FileList'
import { handleFetchDirectory } from '../../actions/currentDirectory'
import { scrollInAction } from '../../actions/viewState'
import { sortByMethodAndReverse, filterByKeywords, fileListEqual } from '../../utils'
import LoadingBar from "react-redux-loading-bar";

const maxWidth = 1200

class FilesContainerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: maxWidth,
            height: 0,
            visible: true,
            visibleContent: this.props.visibleContent,
            displayMode: this.props.displayMode,
        };
        this.filesContainerRef = React.createRef()
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;    
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)   
        dispatch(handleFetchDirectory(this.props.location.pathname));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    componentDidUpdate(prevProps) {
        const { dispatch } = this.props        
        if(prevProps.location.pathname != this.props.location.pathname) {
            dispatch(handleFetchDirectory(this.props.location.pathname))
        } else if(!fileListEqual(prevProps.visibleContent, this.props.visibleContent) || 
            prevProps.keyword != this.props.keyword || 
            prevProps.displayMode != this.props.displayMode) {
            this.setState(() => ({
                visible: false
            }))
            setTimeout(this.transitionEndCallback.bind(this), 300);
        }
        if(this.props.scrollInActionFlag === true) {
            dispatch(scrollInAction(false))
            const { current } = this.filesContainerRef

            if(this.props.scrollTop !== -1) {
                current.parentElement.scrollTo({
                    top: this.props.scrollTop,
                    left: 0,
                    behavior: 'smooth'
                })
            } else {                
                current.parentElement.scrollTo({
                    top: current.scrollHeight,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        }
        // this.filesContainerRef.current.scrollTop = this.state.scrollTop
    }


    // update width to exclude side bars
    updateWindowDimensions() {
        if (window.innerWidth > maxWidth) {
            this.setState({ width: maxWidth, height: window.innerHeight });
        } else {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        }
        
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
                <FileList.Component 
                    pathName={pathName}
                    width={width + "px"}    
                    />
                <FilesContainer
                    width={width + "px"}
                    layoutmode={displayMode}
                    visible={visible}
                    ref={this.filesContainerRef}
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

function mapStateToProps({currentDirectory, viewState}) {
    const { pathName, keyword, method, reverse, content } = currentDirectory
    const {
        scrollTop,
        scrollInActionFlag,
    } = viewState
    return {
        visibleContent: sortByMethodAndReverse(
            filterByKeywords(content, keyword) , method, reverse
        ),
        pathName,
        displayMode: viewState.displayMode,
        keyword,
        scrollTop,
        scrollInActionFlag,
    }
}

export default withRouter(connect(mapStateToProps)(FilesContainerComponent))