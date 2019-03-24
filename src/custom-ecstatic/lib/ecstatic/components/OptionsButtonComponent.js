import React from "react"
import { connect } from 'react-redux'
import styled from 'styled-components'

class OptionsButtonComponent extends React.Component {

    optionClickHandler = () => {
        console.log("option Clicked")
    }

    render() {
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

export default connect()(OptionsButtonComponent);