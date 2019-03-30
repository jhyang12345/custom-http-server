import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { PopupBackground } from './PopupComponent'
import { closeOptionsPopup } from '../actions/optionPopup';
class OptionsComponent extends React.Component {

    closeOptions = (evt) => {
        evt.preventDefault()
        const { dispatch } = this.props
        dispatch(closeOptionsPopup())
    }

    render() {
        const {
            optionsOpen
        } = this.props

        return (
            <Fragment>
                {
                    optionsOpen === true
                    ? 
                        <PopupBackground
                            open={optionsOpen}
                            visible={optionsOpen}
                            onClick={this.closeOptions}
                        />
                    : null
                }

            </Fragment>
        )
    }
}

function mapStateToProps({ optionPopup }) {
  const { optionsOpen } = optionPopup;
  return {
    optionsOpen
  };
}

export default connect(mapStateToProps)(OptionsComponent);