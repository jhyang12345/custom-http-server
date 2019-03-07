import React from "react"
import { connect } from 'react-redux'
import styled from 'styled-components'
import { GRID_MODE, LIST_MODE, alterFolderViewMode } from '../actions/viewState'

class FloatingButtonComponent extends React.Component {

    handleClick = () => {
        const { dispatch } = this.props
        dispatch(alterFolderViewMode())
    }

    render() {
        const { displayMode } = this.props;

        return (
            <FloatingButton
                onClick={this.handleClick}>            
                {
                    displayMode === GRID_MODE
                    ? <i className="fas fa-list"></i>                    
                    : <i className="fas fa-th"></i>
                }                    
                
            </FloatingButton>
        )
    }
}

const FloatingButton = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: #58b9f5;
    color: #FFF;
    z-index: 5;
    text-align: center;
    line-height: 48px;
    box-shadow: 0px 5px 8px -3px #BBB;

    &:hover {
        cursor: pointer;
    }

    & > .fas {
        vertical-align: middle;
        font-size: 24px;
    }
`

function mapStateToProps({ viewState }) {
    return {
        displayMode: viewState.displayMode,
    }
}

export default connect(mapStateToProps)(FloatingButtonComponent)