import React from 'react';
import styled from 'styled-components'
import { getIcon } from '../../pretty-file-icons'
import fs from 'fs'
import path from 'path'

class FileIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            img: null,
        }

        this.handleInitialData()
    }

    // doesn't get called in the server side
    handleInitialData() {

        const { fileIcon } = this.props

        // if fileIcon is null it's a directory
        if (fileIcon === null) {
            return
        }

        const prettyPath = path.join(__dirname, "../../pretty-file-icons/svg")
        const filePath = path.join(prettyPath, fileIcon)
        
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;
            this.setState(() => ({
                loaded: true,
                img: data,
            }))
            data.toString('base64')
        });
    }

    render() {
        const { fileIcon } = this.props
        console.log("fileIcon render:", fileIcon)

        const imgSource = "data:image/svg;base64," + this.state.img

        return (
            <FileIconComponent>
                {
                    this.state.loaded === true
                    ? <img src={imgSource} />
                    : null
                }
            </FileIconComponent>
        )
    }
}

const FileIconComponent = styled.div`
    width: 80px;
`
export default FileIcon