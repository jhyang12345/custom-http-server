import React, {Fragment} from 'react'
import styled from 'styled-components'

class LeftSideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: (window.innerWidth - 680) / 2, height: window.innerHeight });
    }

    render() {
        const { width } = this.state
        const { pathName } = this.props

        return (
            <LeftSideBar
                width={width + "px"}>

            </LeftSideBar>
        )
    }
}

const LeftSideBar = styled.div`
    position: fixed;
    box-sizing: border-box;
    left: 0px;
    top: 0px;
    width: ${props => props.width};
    height: 100%;
    background-color: #FAFAFA;
    padding: 60px 12px;
    z-index: 5;
`

export default LeftSideBarComponent