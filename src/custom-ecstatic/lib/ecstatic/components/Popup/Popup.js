import styled from 'styled-components'

const Popup = styled.div`
    position: fixed;
    left: ${props => props.clientX + 'px'};
    top: ${props => props.clientY + 'px'};
    z-index: 10;
    width: 150px;
    background-color: #fbf7f3;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px #CCC;
    display: 'block';

    opacity: ${props => props.visible === true ? 1 : 0};
    visibility: ${props => props.hidden === true ? 'hidden' : 'visible'};
    transition: opacity .3s;

    &:hover {
        cursor: pointer;
    }
`

export default Popup