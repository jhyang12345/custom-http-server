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
    ${'' /* opacity: ${props => props.animate === true ? 0 : 1};
    transition: opacity 0.3s ease-out;
    transition-delay: ${props => props.transitionTime + 's'}; */}
    &:hover {
        cursor: pointer;
    }
`

export const FileName = styled.div`
    font-size: 1.2em;
    flex: 1;
    color: #555;
    line-height: 60px;
    padding-left: 4px;
    padding-right: 12px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`

export const FileEditName = styled.input`
    font-size: 1.2em;
    flex: 1;
    color: #555;
    line-height: 60px;
    padding-right: 12px;
    margin: 6px 0px;
    padding-left: 3px;
    border-radius: 6px;
    border: 1px solid #DDD;
    outline: none;
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