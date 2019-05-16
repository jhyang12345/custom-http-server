import { FETCH_DIRECTORY, SORT_BY_MODIFIED_TIME, SORT_BY_NAME, SORT, SORT_AGAIN, SORT_BY_SIZE, SET_SEARCH_KEYWORD, SORT_AGAIN_WITH_NEW } from '../actions/currentDirectory'
import { sortByModifiedTime, sortByName, sortBySize, filterByKeywords, sortByMethodAndReverse } from '../utils'
import { REHYDRATE } from 'redux-persist';

export default function currentDirectory (state = {}, action) {
    console.log("currentDirectory", action.type)
    switch (action.type) {
        case FETCH_DIRECTORY :
            if (action.currentDirectory !== undefined) {
                return {
                    ...state,
                    ...action.currentDirectory,
                }
            } else {
                return state
            }            
        case SORT :
            return {
                ...state,
                method: action.method,
                reverse: state.method == action.method
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

function sortByCurrentState(content, state) {
    return sortByMethodAndReverse(content, state.method, state.reverse)
}

// example object
// {
//     pathName: "",
//     method: "",
//     keyword: "",
//     reverse: false,
//     contents: [statObjects],
// }