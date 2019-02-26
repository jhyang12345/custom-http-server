import React, {Fragment} from "react"
import { connect } from 'react-redux'
import { FilesContainer } from './FilesContainer'
import FileComponent from './FileComponent'
import FileListHeaderComponent from './FileListHeaderComponent'
import { sortByModifiedTime } from '../utils/utils'

const minWidthThreshold = 680

class FilesContainerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
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
        const { content, pathName } = this.props.currentDirectory
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
                    {directoryContent.map((file, i) => (
                        <FileComponent key={i}
                            file={file}
                        />
                    ))}
                </FilesContainer>
            </Fragment>
        )
    }
}

function mapStateToProps({currentDirectory}) {
    return {
        currentDirectory,
    }
}

export const FILE_CONTAINER_COMPONENT = 'FILE_CONTAINER_COMPONENT'
export default connect(mapStateToProps)(FilesContainerComponent)