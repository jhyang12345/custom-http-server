import React from "react"
import styled from 'styled-components'

class HeaderItemComponent extends React.Component {
    

    render() {
        const { title } = this.props
        console.log(this.props)
        return (
            <HeaderItem
                {...this.props}>
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

export default HeaderItemComponent