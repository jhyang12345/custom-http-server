import React from "react"
import styled from 'styled-components'

class SubDirectoryComponent extends React.Component {
    handleClick = () => {
        const { actualPath } = this.props

        // TODO: handle link traveling in the future
        window.location.href = actualPath
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
    height: 80px;
    padding: 0px 5px;
    color: ${props => props.isRoot !== true ? "#777" : "#6495ED"};
    margin-left: ${props => props.isRoot !== true ? "0px" : "4px"};
    & > .fa-chevron-right {
        font-size: 0.8em;
        color: #AAA;
        margin-right: 8px;
    }
`

export default SubDirectoryComponent