export const FETCH_DIRECTORY = 'FETCH_DIRECTORY'
export const SORT = 'SORT'
export const SORT_BY_MODIFIED_TIME = 'SORT_BY_MODIFIED_TIME'
export const SORT_BY_SIZE = 'SORT_BY_SIZE'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_AGAIN = 'SORT_AGAIN'
export const SORT_AGAIN_WITH_NEW = 'SORT_AGAIN_WITH_NEW'
export const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";
import { fetchDirectory } from '../utils'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function setDirectory(currentDirectory) {
    return {
        type: FETCH_DIRECTORY,
        currentDirectory
    }
}

export function handleFetchDirectory(directory) {
    return (dispatch) => {
        console.log(`Fetching directory: ${directory}`)
        dispatch(showLoading())
        return fetchDirectory(directory)
        .then(result => {
            return result
        })     
        .then(result => {
            dispatch(setDirectory(result.currentDirectory));
        })
        .then(() => dispatch(hideLoading()));
    }
}

export function createSortByModifiedTimeAction() {
    return createSortAction("modified")
}

export function createSortByNameAction() {
    return createSortAction("name")
}

export function createSortBySizeAction() {
    return createSortAction("size")
}

export function createSortAgainAction() {
    return {
        type: SORT_AGAIN,
    }
}

function createSortAction(method) {
    return {
        type: SORT,
        method
    }
}

export function createSortAgainWithNewAction(currentDirectory) {
    return {
        type: SORT_AGAIN_WITH_NEW,
        currentDirectory
    }
}

export function setSearchKeyword(keyword) {
    return {
        type: SET_SEARCH_KEYWORD,
        keyword
    }
}

// Look into how thunk works functions are handled?.?
export function handleSortAction(sortAction) {
    return (dispatch, getState) => {
        dispatch(sortAction)
        // return a new promise
        return () => {

        }
    }
}