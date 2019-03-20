import { FETCH_DIRECTORY, SORT_BY_MODIFIED_TIME, SORT_BY_NAME, SORT_AGAIN, SORT_BY_SIZE, SET_SEARCH_KEYWORD, SORT_AGAIN_WITH_NEW } from '../actions/currentDirectory'
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
        case SORT_AGAIN: {
            switch (state.method) {
                case "modified" :
                    return {
                        ...state,
                        method: "modified",
                        visibleContent: state.method == "modified"
                            ? [...sortByModifiedTime(state.visibleContent, !state.reverse)]
                            : [...sortByModifiedTime(state.visibleContent, false)],
                    }
                case "name" :
                    return {
                        ...state,
                        method: "name",
                        visibleContent: state.method == "name"
                            ? [...sortByName(state.visibleContent, !state.reverse)]
                            : [...sortByName(state.visibleContent, false)],
                    }
                case "size" :
                    return {
                        ...state,
                        method: "size",
                        visibleContent: state.method == "size"
                            ? [...sortBySize(state.visibleContent, !state.reverse)]
                            : [...sortBySize(state.visibleContent, false)],
                    }
            }
        }
        case SORT_AGAIN_WITH_NEW: {
            switch (state.method) {
                case "modified" :
                    return {
                        ...action.currentDirectory,
                        method: "modified",
                        visibleContent: state.method == "modified"
                            ? [...sortByModifiedTime(action.currentDirectory.content, !state.reverse)]
                            : [...sortByModifiedTime(action.currentDirectory.content, false)],
                    }
                case "name" :
                    return {
                        ...action.currentDirectory,
                        method: "name",
                        visibleContent: state.method == "name"
                            ? [...sortByName(action.currentDirectory.content, !state.reverse)]
                            : [...sortByName(action.currentDirectory.content, false)],
                    }
                case "size" :
                    return {
                        ...action.currentDirectory,
                        method: "size",
                        visibleContent: state.method == "size"
                            ? [...sortBySize(action.currentDirectory.content, !state.reverse)]
                            : [...sortBySize(action.currentDirectory.content, false)],
                    }
            }
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