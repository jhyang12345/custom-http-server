import React from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { handleFetchDirectory } from '../../actions/currentDirectory'

class SubDirectoryComponent extends React.Component {
    handleClick = (evt) => {
        evt.preventDefault()
        const { actualPath, history, dispatch } = this.props

        history.push(actualPath);
        dispatch(handleFetchDirectory(actualPath))        
    }

    render() {
        const { pathName, isRoot } = this.props
        return (
            <SubDirectory
                {...this.props}
                onClick={this.handleClick}>
                {
                isRoot !== true
                ? <i className="fas fa-chevron-right"></i>
                : null
                }
                { pathName }
            </SubDirectory>
        )
    }
}


const SubDirectory = styled.span`
    display: inline-block;
    height: 60px;
    padding: 0px 5px;
    color: ${props => props.isRoot !== true ? "#777" : "#6495ED"};
    margin-left: ${props => props.isRoot !== true ? "0px" : "4px"};
    & > .fa-chevron-right {
        font-size: 0.8em;
        color: #AAA;
        margin-right: 8px;
    }
`

export default withRouter(connect()(SubDirectoryComponent))