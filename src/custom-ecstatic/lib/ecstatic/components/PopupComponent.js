import React, {Fragment} from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { closePopup, copyToClipboard, copyFileNameToClipboard } from '../actions/optionPopup'

class PopupComponent extends React.Component {

    state = {
        visible: false,
    }

    closePopup = (evt) => {
        console.log("clostPopup", evt)
        evt.preventDefault()
        const { dispatch } = this.props
        dispatch(closePopup())
    }

    componentDidMount() {
        this.setState(() => ({
            visible: true,
        }))
    }

    copyLink = () => {
        const { dispatch } = this.props
        dispatch(copyToClipboard())

        this.closePopup()
    }

    copyFileName = () => {
        const { dispatch } = this.props
        dispatch(copyFileNameToClipboard())

        this.closePopup()
    }
    
    render() {
        const { clientX, clientY, open } = this.props
        const { visible } = this.state
        return (
            <Fragment>
                <Popup
                    className="block-copy"
                    open={open}
                    onContextMenu={this.closePopup}
                    visible={visible}
                    clientX={clientX}
                    clientY={clientY}>
                    <PopupItem
                        onClick={this.copyLink}>
                        Copy
                    </PopupItem>
                    <PopupItem
                        onClick={this.copyFileName}>
                        Copy File Name
                    </PopupItem>
                    <PopupItem>Delete</PopupItem>
                </Popup>
                <PopupBackground 
                    open={open}
                    visible={visible}
                    onClick={this.closePopup}
                    onContextMenu={this.closePopup}
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
    display: ${props => props.open === true ? 'block' : 'none'};

    opacity: ${props => props.visible === true ? 0.3 : 0};
    transition: opacity 1s;
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

    opacity: ${props => props.visible === true ? 1 : 0};
    transition: opacity 1s;

    &:hover {
        cursor: pointer;
    }
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