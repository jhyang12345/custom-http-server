import React from 'react'
import ReactDom from 'react-dom'
import App from '../components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'

const store = createStore(reducer)

ReactDom.hydrate(
    <Provider store={store}>
        <App directoryObject={window.__INITIAL__DATA__.directoryObject} />
    </Provider>
    ,
    document.getElementById('root')
)