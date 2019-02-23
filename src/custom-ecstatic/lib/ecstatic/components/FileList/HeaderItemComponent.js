import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'


class HeaderItemComponent extends React.Component {

    handleClick = () => {
        const { action, dispatch } = this.props
        dispatch(action)
    }
    
    render() {
        const { title } = this.props

        return (
            <HeaderItem
                {...this.props}
                onClick={this.handleClick}>
                {title}
                <i className="fas fa-caret-down"></i>
            </HeaderItem>
        )

    }
}

const HeaderItem = styled.div`
    height: 100%;
    line-height: 50px;
    font-size: 0.8em;
    color: #777;
    padding-left: 12px;
    flex: ${props => props.flex !== null ? props.flex : null};
    width: ${props => props.width !== null ? props.width : null };
    text-align: ${props => props.alignRight === true ? "right" : "left"};

    & .fa-caret-down {
        margin-left: 6px;
    }
`

export default connect()(HeaderItemComponent)