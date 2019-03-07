import { combineReducers } from 'redux'
import currentDirectory from './currentDirectory'
import optionPopup from './optionPopup'
import viewState from './viewState'

export default combineReducers({
    currentDirectory,
    optionPopup,
    viewState,
})