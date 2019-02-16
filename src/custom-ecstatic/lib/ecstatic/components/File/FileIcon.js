import React from 'react';
import styled from 'styled-components'
import { getIcon } from '../../pretty-file-icons'

class FileIcon extends React.Component {

    render() {
        const { fileIcon } = this.props
        console.log(fileIcon)
        return (
            <FileIconComponent>
                <img src={"/pretty-file-icons/" + fileIcon} />
            </FileIconComponent>
        )
    }
}

const FileIconComponent = styled.div`
    width: 80px;
`
export default FileIcon