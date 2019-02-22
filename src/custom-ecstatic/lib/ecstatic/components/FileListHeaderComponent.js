import React, {Fragment} from "react"
import styled from 'styled-components'
import { HeaderItemComponent, SubDirectoryComponent } from './FileList'

class FileListHeaderComponent extends React.Component {
    render() {

        const { pathName } = this.props
        console.log("PathName", getRenderedPathName(pathName))
        return (
            <Fragment>
                <FileListHeader>
                    <div className="directory-header">
                        Serving 
                        <SubDirectoryComponent
                            pathName={"root"}
                            isRoot={true}
                        />
                        {getRenderedPathName(pathName)}
                    </div>
                    <div className="inner-container">
                        <HeaderItemComponent
                            flex={1}
                            title="Name" />
                        <HeaderItemComponent
                            width={"80px"}
                            title="Size"
                        />
                        <HeaderItemComponent
                            width={"160px"}
                            title="Modified Time"
                            alignRight={true}
                        />
                    </div>
                </FileListHeader>
            </Fragment>
        )
    }
}

function getRenderedPathName(pathN) {
    let pathName = pathN.trim()
    if(pathName.length === 0) return null
    if(pathName[0] === "/") pathName = pathName.substring(1, pathName.length - 1)
    if (pathName.length === 0) return null
    if (pathName[pathName.length - 1] === "/") pathName = pathName.substring(0, pathName.length - 1)
    if (pathName.length === 0) return null

    const dirs = pathName.split("/")
    console.log("Dirs", dirs)
    return (
        dirs.map((dir, i) => (
            <SubDirectoryComponent
                pathName={dir}
            />
        ))
    )
    // return dirs[dirs.length - 1]
}

const FileListHeader = styled.div`
    
    width: 100%;
    ${'' /* box-shadow: 0px 3px 8px #AAA; */}

    &:hover {
        cursor: pointer;
    }

    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #FFF;

    & > .inner-container {
        height: 50px;
        margin-left: auto;
        margin-right: auto;
        width: 680px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #CCC;
    }

    & > .directory-header {
        height: 80px;
        line-height: 80px;
        padding-left: 12px;
        margin-left: auto;
        margin-right: auto;
        width: 680px;
        font-size: 1.4em;
        box-sizing: border-box;
    }
`

export default FileListHeaderComponent