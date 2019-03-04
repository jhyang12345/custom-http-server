import { FETCH_DIRECTORY, SORT_BY_MODIFIED_TIME, SORT_BY_NAME, SORT_BY_SIZE, SET_SEARCH_KEYWORD } from '../actions/currentDirectory'
import { sortByModifiedTime, sortByName, sortBySize, filterByKeywords } from '../utils/utils'

export default function currentDirectory (state = {}, action) {
    switch (action.type) {
        case FETCH_DIRECTORY :
            return {
                ...state,
                ...action.currentDirectory,
                visibleContent: action.currentDirectory.content,
            }
        case SORT_BY_MODIFIED_TIME :
            return {
                ...state,
                method: "modified",
                visibleContent: state.method == "modified" 
                    ? [...sortByModifiedTime(state.visibleContent, !state.reverse)]
                    : [...sortByModifiedTime(state.visibleContent, false)],
                reverse: state.method == "modified"
                    ? !state.reverse
                    : false,
            }
        case SORT_BY_NAME:
            return {
                ...state,
                method: "name",
                visibleContent: state.method == "name"
                    ? [...sortByName(state.visibleContent, !state.reverse)]
                    : [...sortByName(state.visibleContent, false)],
                reverse: state.method == "name"
                    ? !state.reverse
                    : false,
            }
        case SORT_BY_SIZE:
            return {
                ...state,
                method: "size",
                visibleContent: state.method == "size"
                    ? [...sortBySize(state.visibleContent, !state.reverse)]
                    : [...sortBySize(state.visibleContent, false)],
                reverse: state.method == "size"
                    ? !state.reverse
                    : false,
            }
        case SET_SEARCH_KEYWORD: 
            return {
                ...state,
                keyword: action.keyword,
                visibleContent: filterByKeywords(state.content, action.keyword),
            }
        default:
            return state
    }
}

let defaultState = {

}

// example object
// {
//     pathName: "",
//     method: "",
//     keyword: "",
//     reverse: false,
//     contents: [statObjects],
// }