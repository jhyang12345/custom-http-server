import { combineReducers } from 'redux'
import currentDirectory from './currentDirectory'
import sortMethod from './sortMethod'

export default combineReducers({
    currentDirectory,
    sortMethod,
})