export const HIDE_VIEW = 'HIDE_VIEW'
export const SHOW_VIEW = 'SHOW_VIEW'
export const FADE_IN_VIEW = 'FADE_IN_VIEW'
export const FADE_OUT_VIEW = 'FADE_OUT_VIEW'
export const VIEW_TRANSITION = 'VIEW_TRANSITION'
export const NORMAL_STATE = 'NORMAL_STATE'
export const GRID_MODE = 'GRID_MODE'
export const LIST_MODE = 'LIST_MODE'
export const ALTER_FOLDER_VIEW_MODE = "ALTER_FOLDER_VIEW_MODE"
export const SCROLL_TO = "SCROLL_TO"
export const SCROLL_IN_ACTION = "SCROLL_IN_ACTION"


export function hideView(viewName) {
    return {
        type: HIDE_VIEW,
        viewName,
    }
}

export function showView(viewName) {
    return {
        type: SHOW_VIEW,
        viewName
    }
}

export function fadeInView(viewName) {
    return {
        type: FADE_IN_VIEW,
        viewName,
    }
}

export function fadeOutView(viewName) {
    return {
        type: FADE_OUT_VIEW,
        viewName,
    }
}

export function changeGridMode() {
    return {
        type: GRID_MODE,
    }
}

export function changeListMode() {
    return {
        type: LIST_MODE,
    }
}

export function alterFolderViewMode() {
    return {
        type: ALTER_FOLDER_VIEW_MODE,
    }
}

export function scrollToAction(scrollTop) {
    return {
        type: SCROLL_TO,
        scrollTop
    }
}

export function scrollToTop() {
    return {
        type: SCROLL_TO,
        scrollTop: 0,
    }
}

export function scrollInAction(flag) {
    return {
        type: SCROLL_IN_ACTION,
        flag,
    }
}