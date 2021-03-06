import styled from 'styled-components'
import FileIcon from './FileIcon'
import FileComponent from './FileComponent';

const FileWrapper = styled.a`
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

const FileName = styled.span`
    display: inline-block;
    max-width: 100%;
    font-size: 1.2em;    
    color: #555;    
    padding-left: 4px;
    padding-right: 12px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;    
`

const FileNameContainer = styled.div`
    line-height: 60px;
    flex: 1;
    min-width: 0;
`
// need to add min-width to prevent flex item from overflowing container

const FileEditNameContainer = styled.div`
    flex: 1;
`

const FileEditName = styled.input.attrs({
    type: 'text',
    spellCheck: "false",
})`
    display: inline-block;
    max-width: 100%;
    height: 48px;
    font-size: 1.2em;
    color: #555;
    line-height: 48px;
    margin: 6px 0px;
    padding-left: 3px;
    border-radius: 6px;
    border: 1px solid #DDD;
    outline: none;
    width: ${props => props.width !== 0 ? props.width + "px": '100%'};
`

const FileSize = styled.div`
    width: 80px;
    line-height: 60px;
    font-size: 0.9em;
    padding: 0px 12px;
    text-align: right;
    color: #999;
    overflow: hidden;
`

const FileModifiedDate = styled.div`
    font-size: 0.9em;
    width: 160px;
    line-height: 60px;
    color: #999;
    text-align: right;
    padding-right: 12px;
`

const File = {
    Icon: FileIcon,
    Size: FileSize,
    ModifiedDate: FileModifiedDate,
    EditName: FileEditName,
    EditNameContainer: FileEditNameContainer,
    NameContainer: FileNameContainer,
    Name: FileName,
    Wrapper: FileWrapper,
    Component: FileComponent
}

export default File