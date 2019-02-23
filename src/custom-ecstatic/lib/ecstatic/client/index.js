import React from 'react'
import ReactDom from 'react-dom'
import App from '../components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import middleware from '../middleware'

console.log(window.__INITIAL__DATA__)

let initialState = {
    currentDirectory: window.__INITIAL__DATA__.directoryObject,
}

const store = createStore(reducer, initialState, middleware)

ReactDom.hydrate(
    <Provider store={store}>
        <App directoryObject={window.__INITIAL__DATA__.directoryObject} />
    </Provider>
    ,
    document.getElementById('root')
)