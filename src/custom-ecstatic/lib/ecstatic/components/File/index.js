import styled from 'styled-components'
import FileIcon from './FileIcon'
import Moment from 'react-moment'

export const FileWrapper = styled.a`
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #CCC;
    height: 60px;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`

export const FileName = styled.div`
    font-size: 1.2em;
    flex: 1;
    color: #555;
    line-height: 60px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`

export const FileSize = styled.div`
    width: 60px;
    line-height: 60px;
    font-size: 0.9em;
    color: #999;
`

export const FileModifiedDate = styled.div`
    font-size: 0.9em;
    width: 160px;
    line-height: 60px;
    color: #999;
    text-align: right;
    padding-right: 12px;
`

export  { FileIcon }