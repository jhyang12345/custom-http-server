import React from "react"
import { connect } from 'react-redux'
import styled from 'styled-components'
import { GRID_MODE, LIST_MODE, alterFolderViewMode } from '../actions/viewState'

class FloatingButtonComponent extends React.Component {

    state = {
        displayMode: "",
        animate: false,
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.setState(() => ({
            displayMode: this.props.displayMode,
        }))
    }

        // keep check of previous props here
    componentDidUpdate(prevProps) {
        if (prevProps.displayMode != this.props.displayMode) {
            this.setState(() => ({
                animate: true,
                displayMode: prevProps.displayMode
            }));
        }
    }

    transitionEndCallback = () => {
        if(this.state.animate === true) {
            this.setState(() => ({
                animate: false,
                displayMode: this.props.displayMode,
            }))
        }
    }

    handleClick = () => {
        const { dispatch } = this.props
        dispatch(alterFolderViewMode())
    }

    render() {
        const { displayMode } = this.state;

        return (
          <FloatingButton
            onClick={this.handleClick}
            animate={this.state.animate}
            onTransitionEnd={this.transitionEndCallback}>
            {displayMode === GRID_MODE ? (
              <i className="fas fa-list" />
            ) : (
              <i className="fas fa-th" />
            )}
          </FloatingButton>
        );
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

    opacity: ${props => props.animate === true ? 0 : 1};
    transition: opacity 0.4s ease-out;

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