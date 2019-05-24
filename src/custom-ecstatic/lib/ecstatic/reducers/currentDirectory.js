import { FETCH_DIRECTORY,  SORT, SET_SEARCH_KEYWORD } from '../actions/currentDirectory'


const defaultState = {
    keyword: ""
}

export default function currentDirectory (state = defaultState, action) {
    switch (action.type) {
        case FETCH_DIRECTORY :
            if (action.currentDirectory !== undefined) {
                return {
                    ...state,
                    ...action.currentDirectory,
                }
            } else {
                // replace history in case of failure?.?
                // history.replace(state.pathName)
                // history.goBack()
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


// example object
// {
//     pathName: "",
//     method: "",
//     keyword: "",
//     reverse: false,
//     contents: [statObjects],
// }