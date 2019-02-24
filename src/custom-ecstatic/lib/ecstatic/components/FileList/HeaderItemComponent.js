import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'


class HeaderItemComponent extends React.Component {

    // sortType is the sortType, action is the actual sorting
    handleClick = () => {
        const { action, sortType, dispatch } = this.props
        dispatch(action)
        dispatch(sortType)
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
    color: ${props => props.sortMethod === props.type ? "#568bb3" : "#ccc"};
    padding-left: 12px;
    padding-right: 12px;
    flex: ${props => props.flex !== null ? props.flex : null};
    width: ${props => props.width !== null ? props.width : null };
    text-align: ${props => props.alignRight === true ? "right" : "left"};
    ${'' /* font-weight: ${props => props.sortMethod === props.type ? "bold" : "normal"} */}

    & .fa-caret-down {
        margin-left: 6px;
    }
`

function mapStateToProps({ sortMethod }) {
    return {
        sortMethod,
    }
}

export default connect(mapStateToProps)(HeaderItemComponent)