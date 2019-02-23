import React, {Fragment} from "react"
import { connect } from 'react-redux'
import { FilesContainer } from './FilesContainer'
import FileComponent from './FileComponent'
import FileListHeaderComponent from './FileListHeaderComponent'
import { sortByModifiedTime } from '../utils/utils'

class FilesContainerComponent extends React.Component {
    render() {
        const { content, pathName } = this.props.currentDirectory

        const directoryContent = content

        return (
            <Fragment>
                <FileListHeaderComponent pathName={pathName}/>
                <FilesContainer>
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
    console.log("CurrentState", currentDirectory)
    return {
        currentDirectory,
    }
}

export default connect(mapStateToProps)(FilesContainerComponent)