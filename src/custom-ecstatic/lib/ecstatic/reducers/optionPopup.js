import { OPEN_POPUP, CLOSE_POPUP, SET_POPUP_INFO } from '../actions/optionPopup'

let defaultState = {
    open: false,
    url: "",
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
                url: action.popupInfo,
            }
        default:
            return state
    }
}
