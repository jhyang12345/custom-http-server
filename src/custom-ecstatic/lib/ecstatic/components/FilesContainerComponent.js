import React, {Fragment} from "react"
import { FilesContainer } from './FilesContainer'
import FileComponent from './FileComponent'
import FileListHeaderComponent from './FileListHeaderComponent'
import { sortByModifiedTime } from '../utils/utils'

class FilesContainerComponent extends React.Component {
    render() {
        const { content, pathName } = this.props

        const directoryContent = sortByModifiedTime(content)

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

export default FilesContainerComponent