export const OPEN_POPUP = 'OPEN_POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'
export const SET_POPUP_INFO = 'SET_POPUP_INFO'
export const COPY_TO_CLIPBOARD = 'COPY_TO_CLIPBOARD'
export const COPY_FILE_NAME_TO_CLIPBOARD = 'COPY_FILE_NAME_TO_CLIPBOARD'
export const OPEN_IN_NEW_TAB = 'OPEN_IN_NEW_TAB'

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

export function copyToClipboard() {
    return {
        type: COPY_TO_CLIPBOARD,
    }
}

export function copyFileNameToClipboard() {
    return {
        type: COPY_FILE_NAME_TO_CLIPBOARD,
    }
}

export function openInNewTab() {
    return {
        type: OPEN_IN_NEW_TAB,
    }
}

export function handleOpenPopup(popupInfo) {
    return(dispatch) => {
        dispatch(setPopupInfo(popupInfo))
        dispatch(openPopup())
    }
}