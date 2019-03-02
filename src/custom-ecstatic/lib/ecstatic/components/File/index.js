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

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; 

    &:hover {
        cursor: pointer;
    }
`

export const FileName = styled.div`
    font-size: 1.2em;
    flex: 1;
    color: #555;
    line-height: 60px;
    padding-right: 12px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`

export const FileSize = styled.div`
    width: 80px;
    line-height: 60px;
    font-size: 0.9em;
    padding: 0px 12px;
    text-align: right;
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