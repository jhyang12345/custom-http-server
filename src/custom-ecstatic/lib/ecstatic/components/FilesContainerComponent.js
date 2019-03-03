import React, {Fragment} from "react"
import { connect } from 'react-redux'
import { FilesContainer } from './FilesContainer'
import FileComponent from './FileComponent'
import FileListHeaderComponent from './FileListHeaderComponent'
import { sortByModifiedTime } from '../utils/utils'
import FlipMove from 'react-flip-move'

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
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    // update width to exclude side bars
    updateWindowDimensions() {
        let newWidth = (window.innerWidth) - 240 * 2;
        if (newWidth < minWidthThreshold) newWidth += 240
        if (newWidth < minWidthThreshold) newWidth += 240
        this.setState({ width: newWidth, height: window.innerHeight });
    }

    handleClick = () => {

    }

    render() {
        const { pathName, content } = this.props.currentDirectory
        const { width } = this.state

        const directoryContent = content

        return (
            <Fragment>
                <FileListHeaderComponent 
                    pathName={pathName}
                    width={width + "px"}    
                    />
                <FilesContainer
                    width={width + "px"}>
                    <FlipMove>
                        {directoryContent.map((file, i) => (
                            <FileComponent key={file.key}
                                file={file}
                            />
                        ))}
                    </FlipMove>

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

function mapStateToProps({currentDirectory}) {
    return {
        currentDirectory,
    }
}

export default connect(mapStateToProps)(FilesContainerComponent)