import React, {Fragment} from "react"
import styled from 'styled-components'
import { HeaderItemComponent, SubDirectoryComponent } from './FileList'
import { stripSlashes } from '../utils/utils'
import { createSortByModifiedTimeAction, createSortByNameAction, createSortBySizeAction } from '../actions/currentDirectory'
import { createSetSortMethodName, createSetSortMethodModifiedTime, createSetSortMethodSize } from '../actions/sortMethod'

class FileListHeaderComponent extends React.Component {
    render() {
        const { pathName } = this.props
        
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
                            title="Name"
                            type="name"
                            action={createSortByNameAction()}
                            sortType={createSetSortMethodName()}
                            />
                        <HeaderItemComponent
                            width={"80px"}
                            title="Size"
                            type="size"
                            action={createSortBySizeAction()}
                            sortType={createSetSortMethodSize()}
                        />
                        <HeaderItemComponent
                            width={"160px"}
                            title="Modified Time"
                            type="modified"
                            action={createSortByModifiedTimeAction()}
                            sortType={createSetSortMethodModifiedTime()}
                            alignRight={true}
                        />
                    </div>
                </FileListHeader>
            </Fragment>
        )
    }
}

function getRenderedPathName(pathN) {
    let pathName = stripSlashes(pathN)
    if (pathName.length === 0) return null

    const dirs = pathName.split("/")
    
    return (
        dirs.map((dir, i) => (
            <SubDirectoryComponent
                pathName={dir}
                key={i}
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