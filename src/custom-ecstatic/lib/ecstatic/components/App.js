import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import FileComponent from "./FileComponent"
import { createGlobalStyle } from 'styled-components'
import FilesContainerComponent from "./FilesContainerComponent"
import LeftSideBarComponent from "./LeftSideBarComponent"
import PopupComponent from './PopupComponent'
import { Normalize } from 'styled-normalize'

class App extends Component {
    
    // TODO: Make request for current directory information here
    componentDidMount() {
        
    }

    render() {
        const { currentDirectory } = this.props

        const { pathName, content } = currentDirectory

        return (
            <Fragment
                >
                <Normalize />
                <AppContainer />
                {/* Will not be used to show current directory */}
                {/* <LeftSideBarComponent 
                /> */}
                <FilesContainerComponent />
                <PopupComponent/>
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
    font-family: 'Roboto', sans-serif;
}

html {
    width: 100%;
    height: 100%;
}

body {
    background-color: "#DFDFDF";
    width: 100%;
    height: 100%;
}

div,span {
    box-sizing: border-box;
}

#page_container {
    width: 680px;
    margin-left: auto;
    margin-right: auto;
    background-color: #FFF;
}
`

function mapStateToProps({ currentDirectory }) {
    return {
        currentDirectory
    }
}

export default connect(mapStateToProps)(App)