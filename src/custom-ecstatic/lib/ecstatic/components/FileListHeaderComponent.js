import React, {Fragment} from "react"
import styled from 'styled-components'
import { HeaderItemComponent } from './FileList'

class FileListHeaderComponent extends React.Component {
    render() {

        const { pathName } = this.props

        return (
            <Fragment>
                <FileListHeader>
                    <div class="directory-header">
                        Serving... {getRenderedPathName(pathName)}
                    </div>
                    <div class="inner-container">
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

function getRenderedPathName(pathName) {
    const dirs = pathName.split("/")
    return dirs[-1]
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