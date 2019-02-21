import styled from 'styled-components'
import FileIcon from './FileIcon'

export const FileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #CCC;
    height: 80px;
    width: 100%;
`

export const FileName = styled.div`
    font-size: 1.4em;
    flex: 1;
    color: #555;
    line-height: 80px;
`

export  { FileIcon }