import { combineReducers } from 'redux'
import currentDirectory from './currentDirectory'
import optionPopup from './optionPopup'

export default combineReducers({
    currentDirectory,
    optionPopup,
})