import { HIDE_VIEW, SHOW_VIEW, FADE_IN_VIEW, FADE_OUT_VIEW, GRID_MODE, LIST_MODE, ALTER_FOLDER_VIEW_MODE, SCROLL_TO } from '../actions/viewState'

export default function viewState(state = defaultState, action) {
    switch(action.type) {
        case GRID_MODE: 
            return {
                ...state,
                displayMode: GRID_MODE,
            }
        case LIST_MODE:
            return {
                ...state,
                displayMode: LIST_MODE,
            } 
        case ALTER_FOLDER_VIEW_MODE:
            return {
                ...state,
                displayMode: (
                    state.displayMode === GRID_MODE
                    ? LIST_MODE
                    : GRID_MODE
                )
            }
        case SCROLL_TO:
            return {
                ...state,
                scrollTop: action.scrollTop,
            }
        default:
            return state
    }
}

// TODO: need to define interchangebable views
let defaultState = {
    displayMode: GRID_MODE,
    scrollTop: 0,
}
