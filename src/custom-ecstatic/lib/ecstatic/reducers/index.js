import { combineReducers } from 'redux'
import currentDirectory from './currentDirectory'
import optionPopup from './optionPopup'
import viewState from './viewState'
import { loadingBarReducer } from "react-redux-loading"

export default combineReducers({
    currentDirectory,
    optionPopup,
    viewState,
    loadingBar: loadingBarReducer,
});