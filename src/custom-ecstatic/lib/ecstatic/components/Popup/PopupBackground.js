import styled from 'styled-components'

const PopupBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5;
    background-color: #333;
    display: ${props => props.open === true ? 'block' : 'none'};

    opacity: ${props => props.visible === true ? 0.3 : 0};
    transition: opacity .3s;
    overflow: auto;
    overscroll-behavior: contain;
`

export default PopupBackground