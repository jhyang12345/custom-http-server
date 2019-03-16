export const FETCH_DIRECTORY = 'FETCH_DIRECTORY'
export const SORT_BY_MODIFIED_TIME = 'SORT_BY_MODIFIED_TIME'
export const SORT_BY_SIZE = 'SORT_BY_SIZE'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";
import { fetchDirectory } from '../utils/utils'

export function setDirectory(currentDirectory) {
    return {
        type: FETCH_DIRECTORY,
        currentDirectory
    }
}

export function handleFetchDirectory(directory) {
    console.log("HandleFetchDirectory", directory)
    return (dispatch) => {
        return fetchDirectory(directory)
            .then((currentDirectory) => {
                console.log("Current", currentDirectory)
                dispatch(setDirectory(currentDirectory.currentDirectory))
            })
    }
}

export function createSortByModifiedTimeAction() {
    return {
        type: SORT_BY_MODIFIED_TIME,
    }
}

export function createSortByNameAction() {
    return {
        type: SORT_BY_NAME,
    }
}

export function createSortBySizeAction() {
    return {
        type: SORT_BY_SIZE,
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