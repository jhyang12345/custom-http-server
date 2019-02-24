import { SET_SORT_METHOD_NAME, SET_SORT_METHOD_MODIFIED_TIME, SET_SORT_METHOD_SIZE } from '../actions/sortMethod'

export default function sortMethod 
    (state = {method: "name", reverse: false}, action) {
    switch (action.type) {
        case SET_SORT_METHOD_NAME :
            return {
                method: "name",
                reverse: action.method == state.method ? !state.reverse : false,
            }
        case SET_SORT_METHOD_MODIFIED_TIME :
            return {
                method: "modified",
                reverse: action.method == state.method ? !state.reverse : false,
            }
        case SET_SORT_METHOD_SIZE :
            return {
                method: "size",
                reverse: action.method == state.method ? !state.reverse : false,
            }
        default :
            return state 
    }
}