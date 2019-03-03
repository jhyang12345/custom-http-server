import { OPEN_POPUP, CLOSE_POPUP, SET_POPUP_INFO, COPY_TO_CLIPBOARD } from '../actions/optionPopup'
import copy from 'copy-to-clipboard'

let defaultState = {
    open: false,
    url: "",
    clientX: 0,
    clientY: 0,
}

export default function optionPopup (state=defaultState, action) {
    switch (action.type) {
        case OPEN_POPUP :
            return {
                ...state,
                open: true,
            }
        case CLOSE_POPUP :
            return {
                ...state,
                open: false,
            }
        case SET_POPUP_INFO :
            return {
                ...state,
                ...action.popupInfo,
            }
        case COPY_TO_CLIPBOARD : {
            copy(state.url)
            return {
                ...state,
            }
        }
        default:
            return state
    }
}
