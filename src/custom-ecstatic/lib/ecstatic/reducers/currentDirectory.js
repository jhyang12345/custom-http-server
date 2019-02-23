import { FETCH_DIRECTORY, SORT_BY_MODIFIED_TIME, SORT_BY_NAME, SORT_BY_SIZE } from '../actions/currentDirectory'
import { sortByModifiedTime, sortByName, sortBySize } from '../utils/utils'

export default function currentDirectory (state = {}, action) {
    switch (action.type) {
        case FETCH_DIRECTORY :
            return {
                ...state,
                ...action.currentDirectory,
            }
        case SORT_BY_MODIFIED_TIME :
            return {
                ...state,
                content: [...sortByModifiedTime(state.content)]
            }
        case SORT_BY_NAME:
            return {
                ...state,
                content: [...sortByName(state.content)]
            }
        case SORT_BY_SIZE:
            return {
                ...state,
                content: [...sortBySize(state.content)]
            }
        default:
            return state
    }
}

// example object
// {
//     pathName: "",
//     contents: [statObjects],
// }