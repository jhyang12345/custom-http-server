import {renderToString} from "react-dom/server"

class ReactHelper {
    constructor(parsed) {
        this.parsed = parsed;
        this.pathname = decodeURIComponent(parsed.pathname)

    }

    writeRow(file) {

    }

    finishHtml() {
        this.html = `
            <!DOCTYPE html>
            <html>
                <head>
                
                </head>
                <body>
                    <div id="app">React Dom</div>
                </body>
            </html>
        `
    }
}

module.exports = ReactHelper