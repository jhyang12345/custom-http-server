import React from "react"
import { FileWrapper } from "./File"


class FileComponent extends React.Component {
    
    render() {
        console.log(FileWrapper)

        return (
            <FileWrapper>File</FileWrapper>
        )
    }
}

export default FileComponent