import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import App from "../components/App"
import { ServerStyleSheet } from 'styled-components'


class ReactHelper {
    constructor(parsed) {
        this.parsed = parsed;
        this.pathname = decodeURIComponent(parsed.pathname)

    }

    writeRow(file) {

    }

    // not being used now
    finishHtml() {
        const content = renderToString(<App />)
        console.log("Content", content)

        const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
        const styles = sheet.getStyleTags(); // <--
        this.html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Indexing directory</title>
                    ${styles}
                </head>
                <body>
                    <div>Extra</div>
                    <div id="app">${content}</div>
                </body>
            </html>
        `
    }
}

module.exports = ReactHelper