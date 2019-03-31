import React, {Fragment} from "react"
import { connect } from 'react-redux'
import styled from 'styled-components'
import { openOptionsPopup } from "../../actions/optionPopup";

class OptionsButtonComponent extends React.Component {

    state = {
        showingOptions: false,
    }

    optionClickHandler = (evt) => {
        evt.preventDefault()
        const { dispatch } = this.props
        const { clientX, clientY } = evt
        dispatch(openOptionsPopup({clientX, clientY}))
    }

    render() {
        const { showingOptions } = this.state
        return (
            <FloatingRemote
                onClick={this.optionClickHandler}>
                <i className="fas fa-ellipsis-v"></i>
            </FloatingRemote>
        )
    }
}

const FloatingRemote = styled.span`
    display: inline-block;
    padding: 8px;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    line-height: 44px;

    & > i.fas {
        font-size: 0.7em;
        vertical-align: middle;
        color: #999;  
    }
`

const InvisibleBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5;
    background-color: #333;
    display: ${props => props.open === true ? 'block' : 'none'};

    opacity: 0.3;
    transition: opacity .3s;
    overflow: auto;
    overscroll-behavior: contain;
`

export default connect()(OptionsButtonComponent);