import { OPEN_POPUP, CLOSE_POPUP, SET_POPUP_INFO, COPY_TO_CLIPBOARD, COPY_FILE_NAME_TO_CLIPBOARD, OPEN_IN_NEW_TAB, OPEN_DETAIL_POPUP, OPEN_OPTIONS_POPUP, CLOSE_OPTIONS_POPUP } from '../actions/optionPopup'
import copy from 'copy-to-clipboard'

let defaultState = {
    open: false,
    detailOpen: false,
    optionsOpen: false,
    url: "",
    clientX: 0,
    clientY: 0,
    fileName: "",
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
                detailOpen: false,
            }
        case OPEN_OPTIONS_POPUP :
            return {
                ...state,
                optionsOpen: true,
            }
        case CLOSE_OPTIONS_POPUP :
            return {
                ...state,
                optionsOpen: false,
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
        case COPY_FILE_NAME_TO_CLIPBOARD : {
            copy(state.fileName)
            return {
                ...state,
            }
        }
        case OPEN_IN_NEW_TAB : {
            window.open(state.url, '_blank');
            return {
                ...state
            }
        }
        case OPEN_DETAIL_POPUP : {
            return {
                ...state,
                open: true,
                detailOpen: true,
            }
        }
        default:
            return state
    }
}
