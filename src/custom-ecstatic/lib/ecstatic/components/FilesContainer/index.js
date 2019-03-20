import styled from 'styled-components'
import { GRID_MODE } from '../../actions/viewState';
import FlipMove from 'react-flip-move'

export const FilesContainer = styled.div`
    width: ${props => props.width};
    display: ${props => props.layoutmode === GRID_MODE ? 'grid' : 'block'};
    grid-template-columns: repeat(auto-fill, 160px);
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 130px;
    position: relative;

    opacity: ${props => props.animate === true ? 0 : 1};
    transition: opacity 0.25s ease-out;

    &:after {
        content: "";
        flex: auto;
        ${'' /* content: ${props => props.displayMode === GRID_MODE ? "" : "none"};
        flex: ${props => props.displayMode === GRID_MODE ? "auto" : "none"};         */}
    }
`