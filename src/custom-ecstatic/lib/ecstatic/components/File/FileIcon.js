import React from 'react';
import styled from 'styled-components'
import { getIcon } from '../../pretty-file-icons'
import fs from 'fs'
import path from 'path'
import FileIconImage from './FileIconImage'

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
    }

    // doesn't get called in the server side
    handleInitialData() {

        const { fileIcon } = this.props

        // if fileIcon is null it's a directory
        if (fileIcon === null) {
            this.setState({
                loaded: true,
                img: null,
            })
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
        const imgSource = this.state.img

        return (
            <FileIconComponent>
                {
                    this.state.loaded === true
                    ? <FileIconImage imgSource={imgSource} />
                    : null
                }
            </FileIconComponent>
        )
    }
}

// use & operator to target inner elements?.?
const FileIconComponent = styled.div`
    width: 60px;
    padding: 12px;
    & img {
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
    }

    & i {
        display: block;
        color: #88cdf8;
        text-align: center;
        line-height: 36px;
        font-size: 30px;
    }
`
export default FileIcon