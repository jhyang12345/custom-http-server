import { FETCH_DIRECTORY, SORT_BY_MODIFIED_TIME, SORT_BY_NAME, SORT_BY_SIZE, SET_SEARCH_KEYWORD } from '../actions/currentDirectory'
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
        case SET_SEARCH_KEYWORD: 
            return {
                ...state,
                keyword: action.keyword,
            }
        default:
            return state
    }
}

// example object
// {
//     pathName: "",
//     method: "",
//     keyword: "",
//     reverse: false,
//     contents: [statObjects],
// }