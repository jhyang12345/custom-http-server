import React from 'react'
import ReactDom from 'react-dom'
import App from '../components/App'

console.log("Loaded?")

ReactDom.render(
    <App />,
    document.getElementById('root')
)