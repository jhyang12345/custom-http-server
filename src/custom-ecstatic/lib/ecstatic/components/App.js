import React, { Component } from "react"

class App extends Component {
    
    render() {
        console.log("Current props", this.props)
        const { directoryObject } = this.props

        const { pathName, content } = directoryObject

        return (
            <h1>{pathName}</h1>
        )
    }
}

export default App