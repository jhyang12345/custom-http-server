export const FETCH_DIRECTORY = 'FETCH_DIRECTORY'
export const SORT_BY_MODIFIED_TIME = 'SORT_BY_MODIFIED_TIME'

export function fetchDirectory(currentDirectory) {
    return {
        type: FETCH_DIRECTORY,
        currentDirectory
    }
}

export function sortByModifiedTime() {
    return {
        type: SORT_BY_MODIFIED_TIME,
    }
}