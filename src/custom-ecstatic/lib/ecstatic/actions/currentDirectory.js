export const FETCH_DIRECTORY = 'FETCH_DIRECTORY'
export const SORT = 'SORT'
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

function createSortAction(method) {
    return {
        type: SORT,
        method
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