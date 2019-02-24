export const SET_SORT_METHOD_NAME = 'SET_SORT_METHOD_NAME'
export const SET_SORT_METHOD_MODIFIED_TIME = 'SET_SORT_METHOD_MODIFIED_TIME'
export const SET_SORT_METHOD_SIZE = 'SET_SORT_METHOD_SIZE'

export function createSetSortMethodName() {
    return {
        type: SET_SORT_METHOD_NAME,
        method: "name",
    }
}

export function createSetSortMethodModifiedTime() {
    return {
        type: SET_SORT_METHOD_MODIFIED_TIME,
        method: "modified",
    }
}

export function createSetSortMethodSize() {
    return {
        type: SET_SORT_METHOD_SIZE,
        method: "size",
    }
}