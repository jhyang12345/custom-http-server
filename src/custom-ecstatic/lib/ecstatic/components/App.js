import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import FilesContainer from './FilesContainer'
import PopupComponent from './PopupComponent'
import { Normalize } from 'styled-normalize'
import FloatingButtonComponent from "./FloatingButtonComponent"
import OptionsComponent from './OptionsComponent'
import { setSearchKeyword } from '../actions/currentDirectory'
import { getSearchQuery } from '../utils'

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            scrollTop: 0,
        }
    }

    render() {
        return (
          <Fragment>
            <Normalize />
            <AppContainer />
            <FilesContainer.Component 
                scrollTop={this.state.scrollTop}
                scrollCallBack={this.scrollCallBack}
                />
            <PopupComponent />
            <OptionsComponent />
            <FloatingButtonComponent />
          </Fragment>
        );
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
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
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

#root {
    height: 100%;
    overflow: auto;
}

div,span,input {
    box-sizing: border-box;
}

.block-copy {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; 
}

`;

function mapStateToProps() {
    return {
        
    }
}

export default App