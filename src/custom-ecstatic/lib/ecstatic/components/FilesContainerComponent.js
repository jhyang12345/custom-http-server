import React, {Fragment} from "react"
import { FilesContainer } from './FilesContainer'
import FileComponent from './FileComponent'
import FileListHeaderComponent from './FileListHeaderComponent'

class FilesContainerComponent extends React.Component {
    render() {
        const { content } = this.props
        
        return (
            <Fragment>
                <FileListHeaderComponent/>
                <FilesContainer>
                    {content.map((file, i) => (
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