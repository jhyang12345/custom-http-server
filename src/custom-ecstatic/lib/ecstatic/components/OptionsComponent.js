import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { PopupBackground } from './PopupComponent'
import { closeOptionsPopup } from '../actions/optionPopup'
import styled from 'styled-components'

class OptionsComponent extends React.Component {

    closeOptions = (evt) => {
        evt.preventDefault()
        const { dispatch } = this.props
        dispatch(closeOptionsPopup())
    }

    render() {
        const {
            optionsOpen,
            clientX,
            clientY
        } = this.props

        console.log(clientX, clientY)
        return (
            <Fragment>
                {
                    optionsOpen === true
                    ? 
                        <Fragment>
                            <Popup
                                clientX={clientX}
                                clientY={clientY}
                            />
                            <PopupBackground
                                open={optionsOpen}
                                visible={optionsOpen}
                                onClick={this.closeOptions}
                            />
                        </Fragment>
                    : null
                }

            </Fragment>
        )
    }
}

const Popup = styled.div`
    position: fixed;
    left: ${props => props.clientX - 150 + 'px'};
    top: ${props => props.clientY + 'px'};
    z-index: 10;
    width: 150px;
    background-color: #fbf7f3;
    border-radius: 4px;
    box-shadow: 1px 1px 3px 1px #CCC;
    display: ${props => props.open === true ? 'block' : 'none'};

    opacity: ${props => props.visible === true ? 1 : 0};
`

function mapStateToProps({ optionPopup }) {
  const { optionsOpen, clientX, clientY } = optionPopup;
  return {
    optionsOpen,
    clientX,
    clientY
  };
}

export default connect(mapStateToProps)(OptionsComponent);