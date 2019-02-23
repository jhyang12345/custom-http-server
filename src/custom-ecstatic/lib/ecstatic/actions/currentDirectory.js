export const FETCH_DIRECTORY = 'FETCH_DIRECTORY'

export function fetchDirectory(currentDirectory) {
    return {
        type: FETCH_DIRECTORY,
        currentDirectory
    }
}