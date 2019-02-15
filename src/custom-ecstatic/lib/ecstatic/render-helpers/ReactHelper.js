import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import { App } from "../components/App"

class ReactHelper {
    constructor(parsed) {
        this.parsed = parsed;
        this.pathname = decodeURIComponent(parsed.pathname)

    }

    writeRow(file) {

    }

    finishHtml() {
        const content = renderToString(<App />)
        console.log("Content", content)
        this.html = `
            <!DOCTYPE html>
            <html>
                <head>
                
                </head>
                <body>
                    <div id="app">${content}</div>
                </body>
            </html>
        `
    }
}

module.exports = ReactHelper