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
            </HeaderItem>
        )

    }
}

const HeaderItem = styled.div`
    height: 100%;
    line-height: 60px;
    flex: ${props => props.flex !== null ? props.flex : null};
    width: ${props => props.width !== null ? props.width : null };
    text-align: ${props => props.alignRight === true ? "right" : "left"};
`

export default HeaderItemComponent