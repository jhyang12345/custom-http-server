import styled from 'styled-components'

export const GridFileWrapper = styled.a`
    color: inherit;
    height: 180px;
    border-radius: 8px;
    border: 1px solid #CCC;
    text-align: center;
    margin: 10px;
    text-decoration: none;
    ${'' /* opacity: ${props => (props.animate === true ? 0 : 1)};
    transition: opacity 0.3s ease-out;
    transition-delay: ${props => props.transitionTime + 's'}; */}
    box-shadow: 0px 0px 7px -5px rgba(51,51,51,1);
    overflow: hidden;
`

export const GridFileName = styled.div`
    height: 30px;
    line-height: 28px;
    vertical-align: middle;
    color: #333;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1px 8px;
`

export const GridFileEditName = styled.input.attrs({
    type: 'text',
    spellCheck: "false",
})`
    display: inline-block;
    text-align: center;
    spellcheck: false;
    height: 30px;
    width: 100%;
    line-height: 28px;
    vertical-align: middle;
    padding: 0px 8px 2px 8px;
    color: #333;
    width: 100%;
    outline: none;
    border: none;
    border-top: 1px solid #CCC;
`

const GridFile = {
    Wrapper: GridFileWrapper,
    Name: GridFileName,
    EditName: GridFileEditName,
}

export default GridFile