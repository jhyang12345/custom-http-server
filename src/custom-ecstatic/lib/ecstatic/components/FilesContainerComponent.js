import React from "react"
import { FilesContainer } from './FilesContainer'
import FileComponent from './FileComponent'

class FilesContainerComponent extends React.Component {
    render() {
        const { content } = this.props
        
        return (
            <FilesContainer>
                {content.map((file, i) => (
                    <FileComponent key={i}
                        file={file}
                     />
                ))}
            </FilesContainer>
        )
    }
}

export default FilesContainerComponent