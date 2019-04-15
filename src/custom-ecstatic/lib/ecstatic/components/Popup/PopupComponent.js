import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import PopupItem from './PopupItem'
import Popup from './Popup'

class PopupComponent extends React.Component {    

    constructor(props) {
        super(props)
        this.popupRef = React.createRef()
        this.state = {
            top: 0,
            left: 0,
        }
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
        if(this.props.visible === true && this.props.hidden == false) {
            
        }
    }

    render() {
        const {
            clientX,
            clientY,
            open,
            visible,
            hidden
          } = this.props;
        return (
            <Popup
                className="block-copy"
                open={open}
                onContextMenu={this.props.closePopup}
                visible={visible}
                hidden={hidden}
                clientX={clientX}
                clientY={clientY}
                ref={this.popupRef}
            >
                <PopupItem onClick={this.props.copyLink}>Copy Link</PopupItem>
                <PopupItem onClick={this.props.copyFileName}>
                Copy File Name
                </PopupItem>
                <PopupItem onClick={this.props.openNewTab}>
                Open in new tab
                </PopupItem>
                <PopupItem onClick={this.props.openDetails}>
                Details
                </PopupItem>
                <PopupItem>Delete</PopupItem>
            </Popup>
        )
    }
}

export default PopupComponent