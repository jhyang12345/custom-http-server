import React from 'react';
import styled from 'styled-components'
import path from 'path'
import { connect } from 'react-redux'
import { GRID_MODE } from '../../actions/viewState';

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
        const { displayMode } = this.props

        return (
            (
                displayMode === GRID_MODE
                ? <GridFileIconComponent>
                        {
                            this.state.loaded === true
                                ? <FileIconImage imgSource={imgSource} />
                                : null
                        }
                  </GridFileIconComponent>
                : <FileIconComponent>
                        {
                            this.state.loaded === true
                                ? <FileIconImage imgSource={imgSource} />
                                : null
                        }
                    </FileIconComponent>
            )

        )
    }
}

// use & operator to target inner elements?.?
const FileIconComponent = styled.div`
    width: 60px;
    padding: 12px 10px;
    display: inline-block;
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

const GridFileIconComponent = styled.div`
    width: 100%;
    height: 150px;
    line-height: 150px;
    background-color: #FAFAFA;
    border-radius: 8px;
    text-align: middle;
    & img {
        display: inline-block;
        vertical-align: middle;
        width: 90px;
        height: 90px;
    }

    & i {
        color: #88cdf8;
        text-align: center;
        line-height: 65px;
        font-size: 65px;
        vertical-align: middle;
    }
`

class FileIconImage extends React.Component {
    render() {
        const { imgSource } = this.props

        return (
            (
                imgSource !== null
                    ? <img src={imgSource} />
                    : <i className="fas fa-folder"></i>
            )
        )
    }
}

export default connect()(FileIcon)