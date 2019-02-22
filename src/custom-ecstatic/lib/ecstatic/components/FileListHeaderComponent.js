import React from "react"
import styled from 'styled-components'
import { HeaderItemComponent } from './FileList'

class FileListHeaderComponent extends React.Component {
    render() {
        

        return (
            <FileListHeader>
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
        )

    }
}

const FileListHeader = styled.div`

    height: 60px;
    width: 100%;

    &:hover {
        cursor: pointer;
    }

    
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #FFF;

    & .inner-container {
        margin-left: auto;
        margin-right: auto;
        width: 680px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #CCC;
    }

`

export default FileListHeaderComponent