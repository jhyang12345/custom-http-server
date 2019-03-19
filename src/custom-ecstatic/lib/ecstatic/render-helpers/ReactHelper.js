const styles = require('../show-dir/styles');
const he = require('he');
const permsToString = require('../show-dir/perms-to-string');
const sizeToString = require('../show-dir/size-to-string');
import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from "react-router-dom"
import { createStore } from 'redux'
import reducer from '../reducers'
import middleware from '../middleware'
import { renderToString } from 'react-dom/server'
import App from "../components/App"
import { ServerStyleSheet } from 'styled-components'
import { filterOutParentDirectory } from '../utils/utils'

const supportedIcons = styles.icons;
const css = styles.css;

class ReactHelper {
    constructor(parsed) {
        this.parsed = parsed;
        this.pathname = decodeURIComponent(parsed.pathname)
        this.humanReadable = true
        this.hidePermissions = true
        this.object = {
            pathName: he.encode(this.pathname),
            content: []
        }

        this.html = ""
    }

    writeRow(file) {
        const parsed = this.parsed

        // render a row given a [name, stat] tuple
        const isDir = file[1].isDirectory && file[1].isDirectory();
        let href = `${parsed.pathname.replace(/\/$/, '')}/${encodeURIComponent(file[0])}`;

        // append trailing slash and query for dir entry
        if (isDir) {
            href += `/${he.encode((parsed.search) ? parsed.search : '')}`;
        }

        // file = ["filename", stat]

        const displayName = (file[0]) + ((isDir) ? '/' : '');
        const ext = file[0].split('.').pop();
        const classForNonDir = supportedIcons[ext] ? ext : '_page';
        const iconClass = `icon-${isDir ? '_blank' : classForNonDir}`;

        this.object.content.push({
          displayName: displayName,
          ext: ext,
          classForNonDir: classForNonDir,
          iconClass: iconClass,  
          href: href,
          key: href + file[1].size,
          stat: {
            ...file[1],
            isDir: isDir,
          }
        })
   
    }

    finishHtml() {

        let initialState = {
            currentDirectory: {
                ...this.object,
                content: filterOutParentDirectory(this.object.content),
                method: "name",
                reverse: false,
                visibleContent: filterOutParentDirectory(this.object.content),
            },
        }

        const store = createStore(reducer, initialState, middleware)

        const reactString = renderToString(
            <StaticRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </StaticRouter>
        )

        const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
        const styles = sheet.getStyleTags();
        this.html = `
            <!DOCTYPE html >
            <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width">
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <title>Indexing directory</title>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
                    
                    ${styles}

                    <script>window.__INITIAL__DATA__ = ${JSON.stringify(
                      initialState
                    )}</script>
                    
                </head>
                <body>
                    <div id="root">${reactString}</div>
                    <script src="/client/bundle.js"></script>
                </body>
            </html>`;
    }

}

module.exports = ReactHelper