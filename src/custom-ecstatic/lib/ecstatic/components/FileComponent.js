import path from 'path'
import React from "react"
import { connect } from 'react-redux'
import { withRouter, Redirect} from 'react-router-dom'
import Moment from "react-moment"
import { bytesToSize } from "../utils"
import { FileWrapper, FileName, FileIcon, FileSize, FileModifiedDate } from "./File"
import { GridFileWrapper, GridFileName } from "./GridFile"
import { handleOpenPopup } from '../actions/optionPopup'
import prettyFileIcons from '../pretty-file-icons'
import { stripSlashes } from '../utils'
import { LIST_MODE } from '../actions/viewState'
import { handleFetchDirectory } from '../actions/currentDirectory';

class FileComponent extends React.Component {
    
    state = {
        displayMode: null,
    }

    componentDidUpdate(prevProps) {
        // if(prevProps.displayMode != this.props.displayMode) {
        //     setTimeout(this.transitionEndCallback, 300)
        // }
    }

    transitionEndCallback = () => {        
        // this.setState(() => ({
        //     displayMode: this.props.displayMode,
        // }))    
    }

    handleClick = (evt) => {
        const { file, history } = this.props
        let {
            stat,
            displayName,
        } = file

        const isDir = stat.isDir

        // Don't push path if it is a file
        if(!isDir) return

        evt.preventDefault()

        // TODO : solve issue with react router?.?
        // window.location.href = path.join(curPath, displayName)

        const newPath = path.join(
          window.location.pathname,
          displayName
        );
        
        history.push(newPath)
        // dispatch(handleFetchDirectory(newPath))
    }

    handleRightClick = (evt) => {
        evt.preventDefault()
        const { dispatch, file } = this.props
        let {
            stat,
            displayName,
        } = file
        const { clientX, clientY } = evt

        const curPath = window.location.href

        const popupInfo = {
            url: curPath + stripSlashes(displayName),
            clientX: clientX,
            clientY: clientY,
            fileName: stripSlashes(displayName),
            fileSize: bytesToSize(stat.size),
            modifiedTime: stat.mtime,
        }
        dispatch(handleOpenPopup(popupInfo))
    }

    render() {
        const { file, index, displayMode } = this.props
        let {
            stat,
            displayName,
            ext,
        } = file

        const transitionTime = index * 0.5

        const isDir = stat.isDir
        let fileIcon;

        if (isDir) {
            fileIcon = null
        } else {
            fileIcon = prettyFileIcons.getIcon(displayName, 'svg')
        }
        displayName = stripSlashes(displayName);
        return (    
            // <Redirect>
                displayMode === LIST_MODE
                ?
              (<FileWrapper
                    className="block-copy"
                    href={"./" + displayName}
                    onClick={this.handleClick}
                    onContextMenu={this.handleRightClick}
                    visible={true}
                    index={index}>
                    <FileIcon
                        fileIcon={fileIcon}
                        displayMode={displayMode}
                    />
                    <FileName>
                        {displayName}
                    </FileName>
                    <FileSize>
                        {bytesToSize(stat.size)}
                    </FileSize>
                    <FileModifiedDate>
                        <Moment
                            format="YYYY-MM-DD HH:mm">
                            {stat.mtime}
                        </Moment>
                    </FileModifiedDate>
                </FileWrapper>)
                :
                (
                <GridFileWrapper
                    className="block-copy"
                    href={"./" + displayName}
                    onClick={this.handleClick}
                    onContextMenu={this.handleRightClick}
                    visible={true}
                    index={index}>
                    <FileIcon
                        fileIcon={fileIcon}
                        displayMode={displayMode}
                    />
                    <GridFileName>
                        {displayName}
                    </GridFileName>
                </GridFileWrapper>
            )
            // </Redirect>                            
        )
    }
}

// { displayName: 'yarn.lock',
//   ext: 'lock',
//   classForNonDir: '_page',
//   iconClass: 'icon-_page',
//   href: '/yarn.lock',
//   stat:
//    Stats {
//      dev: 16777220,
//      mode: 33188,
//      nlink: 1,
//      uid: 501,
//      gid: 20,
//      rdev: 0,
//      blksize: 4096,
//      ino: 2367290,
//      size: 383877,
//      blocks: 752,
//      atimeMs: 1550311887616.884,
//      mtimeMs: 1550301627922.5999,
//      ctimeMs: 1550301627922.5999,
//      birthtimeMs: 1550236640685.9114,
//      atime: 2019-02-16T10:11:27.617Z,
//      mtime: 2019-02-16T07:20:27.923Z,
//      ctime: 2019-02-16T07:20:27.923Z,
//      birthtime: 2019-02-15T13:17:20.686Z } }

function mapStateToProps({ viewState }) {
    return {
        // displayMode: viewState.displayMode
        // receive displayMode as props
    }
}
export default withRouter(connect(mapStateToProps)(FileComponent))