import React, { Fragment } from "react"
import { connect } from "react-redux";
import styled from 'styled-components'
import FileList from '../FileList'
import SearchComponent from '../SearchComponent'
import { stripSlashes } from '../../utils'
import { createSortByModifiedTimeAction, createSortByNameAction, createSortBySizeAction } from '../../actions/currentDirectory'
import LoadingBar from "react-redux-loading";

class FileListHeaderComponent extends React.Component {
    render() {
        const { pathName , loadingBar} = this.props
        return (
            <Fragment>
                <FileListHeader
                    {...this.props}>
                    <div className="directory-header">
                        Serving 
                        {/* <SubDirectoryHolderComponent> */}
                            <FileList.SubDirectory
                                pathName={"root"}
                                isRoot={true}
                                actualPath="/"
                            />
                            {getRenderedPathName(pathName)}
                        {/* </SubDirectoryHolderComponent> */}
                        <SearchComponent/>
                        <FileList.OptionsButton/>
                    </div>
                    <div className="inner-container">
                        <FileList.HeaderItem
                            flex={1}
                            title="Name"
                            type="name"
                            action={createSortByNameAction()}

                            />
                        <FileList.HeaderItem
                            width={"80px"}
                            title="Size"
                            type="size"
                            action={createSortBySizeAction()}

                        />
                        <FileList.HeaderItem
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

    console.log(pathName)

    const dirs = pathName.split("/")

    let joinedPath = ""
    const dirComponents = 
        dirs.map((dir, i) => {
            joinedPath = joinedPath + "/" + dir
            return (
            <FileList.SubDirectory
                pathName={dir}
                actualPath={joinedPath}
                key={i}
            />
        )})

    if(dirComponents.length >= 2) { // if length of dirs is longer than or equal to 2 
        return [    
            <FileList.SubDirectory
                pathName={".."}
                actualPath={".."}
                isParent={true}
                key={-1}
                />
            , dirComponents[dirComponents.length - 1]
        ]
    }
    return dirComponents
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
        padding-right: 270px;
        margin-left: auto;
        margin-right: auto;
        width: ${props => props.width};
        font-size: 1.4em;
        box-sizing: border-box;
        overflow: hidden;
    }
`

function mapStateToProps({ loadingBar }) {
    return {
        loadingBar
    }
}

export default connect(mapStateToProps)(FileListHeaderComponent);