import React, {Fragment} from 'react'
import styled from 'styled-components'
import { fetchDirectory } from '../actions/currentDirectory'
import { connect } from 'react-redux'

class LeftSideBarComponent extends React.Component {
    render() {

        return (
            <LeftSideBar
                onClick={this.handleClick}
                >

            </LeftSideBar>
        )
    }
}

const LeftSideBar = styled.div`
    position: fixed;
    box-sizing: border-box;
    left: 0px;
    top: 0px;
    height: 100%;
    background-color: #FAFAFA;
    padding: 60px 12px;
    z-index: 5;
`

export default connect()(LeftSideBarComponent)