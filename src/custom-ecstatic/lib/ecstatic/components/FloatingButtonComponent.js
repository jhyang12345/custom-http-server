import React from "react"
import { connect } from 'react-redux'
import styled from 'styled-components'

class FloatingButtonComponent extends React.Component {
    render() {
        return (
            <FloatingButton>
                <i className="fas fa-th"></i>
            </FloatingButton>
        )
    }
}

const FloatingButton = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #58b9f5;
    color: #FFF;
    z-index: 5;
    text-align: center;
    line-height: 40px;
    box-shadow: 0px 5px 8px -3px #BBB;

    &:hover {
        cursor: pointer;
    }

    & > .fas {
        vertical-align: middle;
    }
`

export default FloatingButtonComponent