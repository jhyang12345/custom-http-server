import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import middleware from '../middleware'

console.log(window.__INITIAL__DATA__)

let initialState = window.__INITIAL__DATA__

const store = createStore(reducer, initialState, middleware)

ReactDom.hydrate(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    ,
    document.getElementById('root')
)