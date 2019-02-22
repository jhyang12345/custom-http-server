import React from "react"
import Moment from "react-moment"
import { bytesToSize } from "../utils/utils"
import { FileWrapper, FileName, FileIcon, FileSize, FileModifiedDate } from "./File"
import prettyFileIcons from '../pretty-file-icons'

class FileComponent extends React.Component {
    
    render() {
        const { file } = this.props
        const {
            stat,
            displayName,
            ext,
        } = file

        const isDir = stat.isDir
        let fileIcon;

        if (isDir) {
            fileIcon = null
        } else {
            fileIcon = prettyFileIcons.getIcon(displayName, 'svg')
        }

        return (
            <FileWrapper>
                <FileIcon 
                    fileIcon={fileIcon}
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
            </FileWrapper>
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

export default FileComponent