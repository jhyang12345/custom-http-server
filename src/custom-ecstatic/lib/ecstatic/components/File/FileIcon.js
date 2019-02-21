import React from 'react';
import styled from 'styled-components'
import { getIcon } from '../../pretty-file-icons'
import fs from 'fs'
import path from 'path'

class FileIcon extends React.Component {

    // beware not to call handleInitialData in constructor
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            img: null,
        }
    }

    // componentDidMount only called in client side
    componentDidMount() {
        this.handleInitialData()
        console.log("Initial load")
    }

    // doesn't get called in the server side
    handleInitialData() {

        const { fileIcon } = this.props

        // if fileIcon is null it's a directory
        if (fileIcon === null) {
            return
        }

        const prettyPath = path.join(__dirname, "/pretty-file-icons/svg")
        const filePath = path.join(prettyPath, fileIcon)

        this.setState({
            loaded: true,
            img: filePath,
        })
        
    }

    render() {
        const { fileIcon } = this.props
        console.log("fileIcon render:", this.state.loaded)

        const imgSource = this.state.img

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