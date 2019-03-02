export const OPEN_POPUP = 'OPEN_POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'
export const SET_POPUP_INFO = 'SET_POPUP_INFO'

export function openPopup() {
    return {
        type: OPEN_POPUP,
    }
}

export function closePopup() {
    return {
        type: CLOSE_POPUP,
    }
}

export function setPopupInfo(popupInfo) {
    return {
        type: SET_POPUP_INFO,
        popupInfo,
    }
}

export function handleOpenPopup(popupInfo) {
    return(dispatch) => {
        dispatch(setPopupInfo(popupInfo))
        dispatch(openPopup())
    }
}