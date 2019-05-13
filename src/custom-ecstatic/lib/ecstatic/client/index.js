import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../components/App'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import reducer from '../reducers'
import middleware from '../middleware'
import { filterOutParentDirectory } from '../utils'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import { createSortAgainAction, createSortAgainWithNewAction } from '../actions/currentDirectory';

console.log(window.__INITIAL__DATA__)

// initialData = {
//     pathName, content
// }
const initialData = window.__INITIAL__DATA__.currentDirectory
let initialState = {
    currentDirectory : {
        ...initialData,
        content: filterOutParentDirectory(initialData.content),
        method: "name",
        reverse: false,
        visibleContent: filterOutParentDirectory(initialData.content),
    }
}

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    blacklist: ["currentDirectory", "loadingBar"]
};

const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(pReducer, initialState, middleware)
const persistor = persistStore(store)

ReactDom.render(
    <Router>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>            
        </Provider>
    </Router>
    ,
    document.getElementById('root')
)