import React from 'react'
import ReactDom from 'react-dom'
import App from '../components/App'

console.log("Loaded?")
console.log(window.__INITIAL__DATA__)
ReactDom.hydrate(
    <App directoryObject={window.__INITIAL__DATA__.directoryObject}/>,
    document.getElementById('root')
)