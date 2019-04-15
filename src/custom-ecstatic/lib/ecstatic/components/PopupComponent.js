import React, {Fragment} from "react"
import { connect } from "react-redux"
import Moment from 'react-moment'
import styled from "styled-components"
import { closePopup, copyToClipboard, copyFileNameToClipboard, openInNewTab, openDetailPopup } from '../actions/optionPopup'
import Popup from './Popup'

class PopupComponent extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        visible: false,
        hidden: true,
      }
      this.popupRef = React.createRef()
    }

    closePopup = (evt) => {
        evt.preventDefault()
        const { dispatch } = this.props
        dispatch(closePopup())
    }

    componentDidMount() {
            
    }

    componentDidUpdate(prevProps, prevStates) {
        if (prevProps.open != this.props.open && this.props.open === true) {
          if(this.props.open === true) {
            setTimeout(() => {
              this.setState(() => ({
                  visible: true,
              }))
            }, 100)
          }        
          else {
            this.setState(() => ({
              visible: false,
              hidden: true,
            }))
          }
        } else if (prevProps.open != this.props.open && this.props.open === false && prevStates.hidden === false) {
          this.setState(() => ({
            hidden: true,
            visible: false,
          }))
        } else if(this.props.open === true && this.state.visible === true 
          && prevStates.visible != this.state.visible) {    
          const popupElem = this.popupRef.current    
          this.setState(() => ({
            hidden: false,
          }))          
        } 
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
        const { visible, hidden } = this.state        

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
              <Popup.Component
                className="block-copy"
                open={open}
                onContextMenu={this.closePopup}
                visible={visible}
                hidden={hidden}
                clientX={clientX}
                clientY={clientY}
                ref={this.popupRef}
                copyLink={this.copyLink}
                copyFileName={this.copyFileName}
                openNewTab={this.openNewTab}
                openDetails={this.openDetails}
              />
            )}
            <PopupBackground
              onScroll={this.blockScroll}
              open={open}
              visible={visible}
              onClick={this.closePopup}
              onContextMenu={this.closePopup}
            //   onTouchMove={this.blockScroll}
            //   onTouchStart={this.blockScroll}
            //   onTouchEnd={this.blockScroll}
            />
          </Fragment>
        );
    }
}

export const PopupBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5;
    background-color: #333;
    display: ${props => props.open === true ? 'block' : 'none'};

    opacity: ${props => props.visible === true ? 0.3 : 0};
    transition: opacity .3s;
    overflow: auto;
    overscroll-behavior: contain;
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
    transition: opacity .3s;

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