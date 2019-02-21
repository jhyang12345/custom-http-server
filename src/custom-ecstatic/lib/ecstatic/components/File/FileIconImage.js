import React from "react";
import styled from 'styled-components'
import path from 'path'

class FileIconImage extends React.Component {
    render() {
        const { imgSource } = this.props

        console.log("Image source:", imgSource)

        return (
            (
            imgSource !== null
            ? <img src={imgSource} />
            : <i class="fas fa-folder"></i>
            ) 
        )
    }
}

export default FileIconImage