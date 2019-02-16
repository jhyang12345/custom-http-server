import React, { Component, Fragment } from "react"
import FileComponent from "./FileComponent"
import { createGlobalStyle } from 'styled-components'
import FilesContainerComponent from "./FilesContainerComponent";

class App extends Component {
    
    render() {
        const { directoryObject } = this.props

        const { pathName, content } = directoryObject

        return (
            <Fragment>
                <AppContainer />
                <h1>{pathName}</h1>

                <div id="page_container">
                    <FilesContainerComponent content={content} />
                </div>

            </Fragment>
        )
    }
}

const AppContainer = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
#page_container {
    width: 680px;
    margin-left: auto;
    margin-right: auto;
}
`

export default App