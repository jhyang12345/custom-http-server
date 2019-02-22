import styled from 'styled-components'
import FileIcon from './FileIcon'
import Moment from 'react-moment'

export const FileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #CCC;
    height: 80px;
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`

export const FileName = styled.div`
    font-size: 1.4em;
    flex: 1;
    color: #555;
    line-height: 80px;
`

export const FileSize = styled.div`
    width: 80px;
    line-height: 80px;
    color: #999;
`

export const FileModifiedDate = styled.div`
    font-size: 1.0em;
    width: 160px;
    line-height: 80px;
    color: #999;
    text-align: right;
`

export  { FileIcon }