import { FETCH_DIRECTORY, SORT_BY_MODIFIED_TIME } from '../actions/currentDirectory'
import { sortByModifiedTime } from '../utils/utils'

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
        default:
            return state
    }
}



// example object
// {
//     pathName: "",
//     contents: [statObjects],
// }