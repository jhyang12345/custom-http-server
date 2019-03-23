import React from "react"
import { connect } from 'react-redux'
import styled from 'styled-components'

class OptionsButtonComponent extends React.Component {

    render() {
        return (
            <FloatingRemote>
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
    line-height: 58px;

    & > i.fas {
        vertical-align: middle;
    }
`

export default connect()(OptionsButtonComponent);