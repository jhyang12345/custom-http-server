import React, {Fragment} from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { closePopup } from '../actions/optionPopup'

class PopupComponent extends React.Component {

    closePopup = () => {
        const { dispatch } = this.props
        dispatch(closePopup())
    }
    
    render() {
        console.log(this.props)
        const { clientX, clientY, open } = this.props
        return (
            <Fragment>
                <Popup
                    open={open}
                    clientX={clientX}
                    clientY={clientY}>
                    <PopupItem>Copy</PopupItem>
                    <PopupItem>Delete</PopupItem>
                </Popup>
                <PopupBackground 
                    open={open}
                    onClick={this.closePopup}
                />
            </Fragment>
            
        )
    }
}

const PopupBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5;
    background-color: #333;
    opacity: 0.3;
    display: ${props => props.open === true ? 'block' : 'none'};
`

const Popup = styled.div`
    position: fixed;
    left: ${props => props.clientX + 'px'};
    top: ${props => props.clientY + 'px'};
    z-index: 10;
    width: 150px;
    background-color: #fbf7f3;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px #CCC;
    display: ${props => props.open === true ? 'block' : 'none'};
`

const PopupItem = styled.div`
    color: #333;
    border-bottom: 1px solid #CCC;
    padding: 8px 12px;
    color: #575757;

    &:last-child {
        border-bottom: none;
    }
`

function mapStateToProps({optionPopup}) {
    const { open, url, clientX, clientY } = optionPopup
    return {
        open,
        url,
        clientX,
        clientY,
    }
}

export default connect(mapStateToProps)(PopupComponent)