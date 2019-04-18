import { FETCH_DIRECTORY, SORT_BY_MODIFIED_TIME, SORT_BY_NAME, SORT_AGAIN, SORT_BY_SIZE, SET_SEARCH_KEYWORD, SORT_AGAIN_WITH_NEW } from '../actions/currentDirectory'
import { sortByModifiedTime, sortByName, sortBySize, filterByKeywords } from '../utils'

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
                        visibleContent: [...sortByModifiedTime(state.visibleContent, state.reverse)]
                    }
                case "name" :
                    return {
                        ...state,
                        method: "name",
                        visibleContent: [...sortByName(state.visibleContent, state.reverse)]                            
                    }
                case "size" :
                    return {
                        ...state,
                        method: "size",
                        visibleContent: [...sortBySize(state.visibleContent, state.reverse)]
                    }
            }
        }
        case SORT_AGAIN_WITH_NEW: {
            switch (state.method) {
                case "modified" :
                    return {
                        ...action.currentDirectory,
                        keyword: "",
                        method: "modified",
                        visibleContent: [...sortByModifiedTime(action.currentDirectory.content, state.reverse)]
                    }
                case "name" :
                    return {
                        ...action.currentDirectory,
                        keyword: "",
                        method: "name",
                        visibleContent: [...sortByName(action.currentDirectory.content, state.reverse)]                            
                    }
                case "size" :
                    return {
                        ...action.currentDirectory,
                        keyword: "",
                        method: "size",
                        visibleContent: [...sortBySize(action.currentDirectory.content, state.reverse)]
                    }
            }
        }            
        case SET_SEARCH_KEYWORD: 
            return {
                ...state,
                keyword: action.keyword,
                visibleContent: sortByCurrentState(filterByKeywords(state.content, action.keyword), state),
            }
        default:
            return state
    }
}

function sortByCurrentState(content, state) {
    switch (state.method) {
        case "modified" :
            return [...sortByModifiedTime(content, state.reverse)]
            
        case "name" :
            return [...sortByName(content, state.reverse)]                            
            
        case "size" :
            return [...sortBySize(content, state.reverse)]        
    }
    return content
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