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
                method: "modified",
                content: state.method == "modified" 
                    ? [...sortByModifiedTime(state.content, !state.reverse)]
                    : [...sortByModifiedTime(state.content, false)],
                reverse: state.method == "modified"
                    ? !state.reverse
                    : false,
            }
        case SORT_BY_NAME:
            return {
                ...state,
                method: "name",
                content: state.method == "name"
                    ? [...sortByName(state.content, !state.reverse)]
                    : [...sortByName(state.content, false)],
                reverse: state.method == "name"
                    ? !state.reverse
                    : false,
            }
        case SORT_BY_SIZE:
            return {
                ...state,
                method: "size",
                content: state.method == "size"
                    ? [...sortBySize(state.content, !state.reverse)]
                    : [...sortBySize(state.content, false)],
                reverse: state.method == "size"
                    ? !state.reverse
                    : false,
            }
        default:
            return state
    }
}

// example object
// {
//     pathName: "",
//     method: "",
//     reverse: false,
//     contents: [statObjects],
// }