import { combineReducers } from 'redux'
import currentDirectory from './currentDirectory'
import optionPopup from './optionPopup'
import viewState from './viewState'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { loadingBarReducer } from 'react-redux-loading-bar'

const curDirConfig = {
    key: 'currentDirectory',
    storage: storage,
    blacklist: ["pathName", "keyword", "contents", "visibleContent"],
    whitelist: ["method", "reverse"],
}

export default combineReducers({
    currentDirectory: persistReducer(curDirConfig, currentDirectory),
    optionPopup,
    viewState,
    loadingBar: loadingBarReducer,
});