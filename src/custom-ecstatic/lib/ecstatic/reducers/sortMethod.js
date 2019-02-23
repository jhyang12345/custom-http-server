import { SET_SORT_METHOD_NAME, SET_SORT_METHOD_MODIFIED_TIME, SET_SORT_METHOD_SIZE } from '../actions/sortMethod'

export default function sortMethod (state="name", action) {
    switch (action.type) {
        case SET_SORT_METHOD_NAME :
            return "name"
        case SET_SORT_METHOD_MODIFIED_TIME :
            return "modified"
        case SET_SORT_METHOD_SIZE :
            return "size"
        default :
            return state 
    }
}