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
`;

export const GridFileName = styled.div`
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    color: #333;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px 8px;
`
const GridFile = {
    Wrapper: GridFileWrapper,
    Name: GridFileName
}

export default GridFile