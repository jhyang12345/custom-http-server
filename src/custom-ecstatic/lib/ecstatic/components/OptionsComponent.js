import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Popup from './Popup'
import { closeOptionsPopup } from '../actions/optionPopup'
import styled from 'styled-components'
import { handleFetchDirectory } from "../actions/currentDirectory"
import { scrollToTop, scrollInAction, scrollToAction } from '../actions/viewState'
class OptionsComponent extends React.Component {

    closeOptions = (evt) => {
        evt.preventDefault()
        const { dispatch } = this.props
        dispatch(closeOptionsPopup())
    }

    refreshCallback = (evt) => {
        evt.preventDefault()
        const { dispatch } = this.props
        dispatch(handleFetchDirectory(this.props.location.pathname));
        
        this.closeOptions(evt)
    }

    scrollToTopCallback = (evt) => {
        evt.preventDefault()
        const { dispatch } = this.props
        dispatch(scrollToTop())       
        dispatch(scrollInAction(true))

        this.closeOptions(evt)
    }

    scrollToBottomCallback = (evt) => {
        evt.preventDefault()
        const { dispatch } = this.props
        dispatch(scrollToAction(-1))
        dispatch(scrollInAction(true))
        this.closeOptions(evt)
    }

    render() {
        const {
            optionsOpen,
            clientX,
            clientY
        } = this.props

        return (
            <Fragment>
                {
                    optionsOpen === true
                    ? 
                        <Fragment>
                            <OptionsPopup
                                clientX={clientX}
                                clientY={clientY}
                                visible={optionsOpen}
                                open={optionsOpen}
                                className="block-copy"
                            >
                                <Popup.Item
                                    onClick={this.refreshCallback}>
                                    Refresh
                                </Popup.Item>
                                <Popup.Item
                                    onClick={this.scrollToTopCallback}>
                                    Scroll to Top
                                </Popup.Item>
                                <Popup.Item
                                    onClick={this.scrollToBottomCallback}>
                                    Scroll to Bottom
                                </Popup.Item>
                            </OptionsPopup>
                            <Popup.Background
                                open={optionsOpen}
                                display={optionsOpen}
                                visible={false}
                                onClick={this.closeOptions}
                            />
                        </Fragment>
                    : null
                }

            </Fragment>
        )
    }
}

const OptionsPopup = styled.div`
    position: fixed;
    left: ${props => props.clientX - 153 + 'px'};
    top: ${props => props.clientY + 3 + 'px'};
    z-index: 10;
    width: 150px;
    background-color: #fbf7f3;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px #CCC;
    display: ${props => props.open === true ? 'block' : 'none'};

    opacity: ${props => props.visible === true ? 1 : 0};

    &:hover {
        cursor: pointer;
    }
`

function mapStateToProps({ optionPopup }) {
  const { optionsOpen, clientX, clientY } = optionPopup;
  
  return {
    optionsOpen,
    clientX,
    clientY
  };
}

export default withRouter(connect(mapStateToProps)(OptionsComponent))