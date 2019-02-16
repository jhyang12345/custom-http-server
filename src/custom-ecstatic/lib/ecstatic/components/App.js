import React, { Component, Fragment } from "react"
import FileComponent from "./FileComponent"

class App extends Component {
    
    render() {
        const { directoryObject } = this.props

        const { pathName, content } = directoryObject

        return (
            <Fragment>
                <h1>{pathName}</h1>

                <ul>
                    {content.map((file, i) => (
                        <FileComponent key={i} />
                    ))}
                </ul>
            </Fragment>
        )
    }
}

export default App