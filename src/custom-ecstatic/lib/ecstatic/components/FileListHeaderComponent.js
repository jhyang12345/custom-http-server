import React, {Fragment} from "react"
import styled from 'styled-components'
import { HeaderItemComponent, SubDirectoryComponent } from './FileList'
import SearchComponent from './SearchComponent'
import { stripSlashes } from '../utils/utils'
import { createSortByModifiedTimeAction, createSortByNameAction, createSortBySizeAction } from '../actions/currentDirectory'

class FileListHeaderComponent extends React.Component {
    render() {
        const { pathName } = this.props
        
        return (
            <Fragment>
                <FileListHeader
                    {...this.props}>
                    <div className="directory-header">
                        Serving 
                        <SubDirectoryComponent
                            pathName={"root"}
                            isRoot={true}
                            actualPath="/" 
                        />
                        {getRenderedPathName(pathName)}
                        <SearchComponent/>
                    </div>
                    <div className="inner-container">
                        <HeaderItemComponent
                            flex={1}
                            title="Name"
                            type="name"
                            action={createSortByNameAction()}

                            />
                        <HeaderItemComponent
                            width={"80px"}
                            title="Size"
                            type="size"
                            action={createSortBySizeAction()}

                        />
                        <HeaderItemComponent
                            width={"160px"}
                            title="Modified Time"
                            type="modified"
                            action={createSortByModifiedTimeAction()}

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
    let joinedPath = ""
    return (
        dirs.map((dir, i) => {
            joinedPath = joinedPath + "/" + dir
            return (
            <SubDirectoryComponent
                pathName={dir}
                actualPath={joinedPath}
                key={i}
            />
        )})
    )
    // return dirs[dirs.length - 1]
}

const FileListHeader = styled.div`
    
     width: ${props => props.width};
    ${'' /* box-shadow: 0px 3px 8px #AAA; */}

    &:hover {
        cursor: pointer;
    }

    position: fixed;
    z-index: 3;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #FFF;

    & > .inner-container {
        height: 50px;
        margin-left: auto;
        margin-right: auto;
        width: ${props => props.width};
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #CCC;
    }

    & > .directory-header {
        position: relative;
        height: 60px;
        line-height: 60px;
        padding-left: 12px;
        margin-left: auto;
        margin-right: auto;
        width: ${props => props.width};
        font-size: 1.4em;
        box-sizing: border-box;
    }
`

export default FileListHeaderComponent