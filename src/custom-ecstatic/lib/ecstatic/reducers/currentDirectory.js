import { FETCH_DIRECTORY } from '../actions/currentDirectory'

export default function currentDirectory (state = {}, action) {
    switch (action.type) {
        case FETCH_DIRECTORY :
            return {
                ...state,
                ...action.currentDirectory,
            }
        default:
            return state
    }

}