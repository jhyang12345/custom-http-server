export const FETCH_DIRECTORY = 'FETCH_DIRECTORY'
export const SORT_BY_MODIFIED_TIME = 'SORT_BY_MODIFIED_TIME'
export const SORT_BY_NAME = 'SORT_BY_NAME'

export function fetchDirectory(currentDirectory) {
    return {
        type: FETCH_DIRECTORY,
        currentDirectory
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