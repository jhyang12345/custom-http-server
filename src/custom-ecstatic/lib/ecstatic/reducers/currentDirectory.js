import { FETCH_DIRECTORY, SORT_BY_MODIFIED_TIME, SORT_BY_NAME, SORT_AGAIN, SORT_BY_SIZE, SET_SEARCH_KEYWORD, SORT_AGAIN_WITH_NEW } from '../actions/currentDirectory'
import { sortByModifiedTime, sortByName, sortBySize, filterByKeywords } from '../utils'
import { REHYDRATE } from 'redux-persist';

export default function currentDirectory (state = {}, action) {
    console.log("currentDirectory", action.type)
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
            return {
                ...state,
                visibleContent: sortByCurrentState(state.content, state)
            }
        }
        case REHYDRATE : {
            state = {
                ...state,
                method: action.payload.method,
                reverse: action.payload.reverse,
            }
            return {
                ...state,
                visibleContent: sortByCurrentState(state.content, state)
            }
        }
        case SORT_AGAIN_WITH_NEW: {
            return {
                ...state,
                ...action.currentDirectory,
                keyword: "",
                visibleContent: sortByCurrentState(action.currentDirectory.content, state)
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