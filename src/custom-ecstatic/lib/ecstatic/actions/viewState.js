export const HIDE_VIEW = 'HIDE_VIEW'
export const SHOW_VIEW = 'SHOW_VIEW'
export const FADE_IN_VIEW = 'FADE_IN_VIEW'
export const FADE_OUT_VIEW = 'FADE_OUT_VIEW'
export const VIEW_TRANSITION = 'VIEW_TRANSITION'
export const NORMAL_STATE = 'NORMAL_STATE'

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
