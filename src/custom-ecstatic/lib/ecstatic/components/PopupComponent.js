import React, {Fragment} from "react"
import { connect } from "react-redux"
import Moment from 'react-moment'
import styled from "styled-components"
import { closePopup, copyToClipboard, copyFileNameToClipboard, openInNewTab, openDetailPopup } from '../actions/optionPopup'

class PopupComponent extends React.Component {

    state = {
        visible: false,
    }

    closePopup = (evt) => {
        evt.preventDefault()
        console.log("Popup closed!", evt)
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

        dispatch(closePopup());
    }

    copyFileName = () => {
        const { dispatch } = this.props
        dispatch(copyFileNameToClipboard())
        
        dispatch(closePopup())        
    }

    openNewTab = () => {
        const { dispatch } = this.props

        dispatch(openInNewTab())
        dispatch(closePopup())
    }

    openDetails = () => {
        const { dispatch } = this.props

        dispatch(openDetailPopup())
    }
    
    blockScroll = (evt) => {
        evt.preventDefault()
        evt.stopPropagation()
    }

    render() {
        const {
          clientX,
          clientY,
          open,
          detailOpen,
          fileName,
          fileSize,
          modifiedTime
        } = this.props;
        const { visible } = this.state
        console.log(detailOpen)
        return (
          <Fragment>
            {detailOpen === true ? (
              <DetailPopup open={open} visible={visible}>
                <DetailBlock>
                  <DetailTitle>File Name:</DetailTitle>
                  <DetailContent>{fileName}</DetailContent>
                </DetailBlock>
                <DetailBlock>
                  <DetailTitle>File Size:</DetailTitle>
                  <DetailContent>{fileSize}</DetailContent>
                </DetailBlock>
                <DetailBlock>
                  <DetailTitle>Modified Time:</DetailTitle>
                  <DetailContent>
                    <Moment format="YYYY-MM-DD HH:mm">
                        {modifiedTime}
                    </Moment>
                  </DetailContent>
                </DetailBlock>
              </DetailPopup>
            ) : (
              <Popup
                className="block-copy"
                onScroll={this.blockScroll}
                open={open}
                onContextMenu={this.closePopup}
                visible={visible}
                clientX={clientX}
                clientY={clientY}
              >
                <PopupItem onClick={this.copyLink}>Copy Link</PopupItem>
                <PopupItem onClick={this.copyFileName}>
                  Copy File Name
                </PopupItem>
                <PopupItem onClick={this.openNewTab}>
                  Open in new tab
                </PopupItem>
                <PopupItem onClick={this.openDetails}>
                  Details
                </PopupItem>
                <PopupItem>Delete</PopupItem>
              </Popup>
            )}
            <PopupBackground
              onScroll={this.blockScroll}
              open={open}
              visible={visible}
              onClick={this.closePopup}
              onContextMenu={this.closePopup}
            />
          </Fragment>
        );
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

const DetailPopup = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 400px;
    padding: 12px;
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

const DetailBlock = styled.div`
    padding: 4px 2px;
    text-align: right;
`

const DetailTitle = styled.span`
    color: #777;
    font-size: 1.2em;
    margin-right: 4px;
    float: left;
`

const DetailContent = styled.span`
    color: #333;
    font-size: 1.2em;
    text-align: right;    
    word-break: break-word;
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
    const {
      open,
      url,
      detailOpen,
      clientX,
      clientY,
      fileName,
      fileSize,
      modifiedTime
    } = optionPopup;
    
    return {
        open,
        url,
        detailOpen,
        clientX,
        clientY,
        fileName,
        fileSize,
        modifiedTime,
    }
}

export default connect(mapStateToProps)(PopupComponent)