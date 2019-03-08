import styled from 'styled-components'
import { GRID_MODE } from '../../actions/viewState';

export const FilesContainer = styled.div`
    width: ${props => props.width};
    display: ${props => props.displayMode === GRID_MODE ? 'inline-grid' : 'block'};
    margin-left: auto;
    margin-right: auto;
    padding-top: 130px;
    position: relative;

    &:after {
        content: "";
        flex: auto;
        ${'' /* content: ${props => props.displayMode === GRID_MODE ? "" : "none"};
        flex: ${props => props.displayMode === GRID_MODE ? "auto" : "none"};         */}
    }
`