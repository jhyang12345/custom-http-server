import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
import { SearchBarComponent, SearchButtonComponent } from './Search'

class SearchComponent extends React.Component {

    state = {
        barRevealed: true,
    }

    handleFocus = () => {
        this.setState((prevState) => ({
            barRevealed: !prevState.barRevealed,
        }))
        console.log(this.state)
    }

    render() {
        const { barRevealed } = this.state
        return (
            <SearchBox>
                <SearchBarComponent 
                    revealed={barRevealed}
                />
                <SearchButtonComponent
                    handleFocus={this.handleFocus}
                    />
            </SearchBox>
        )
    }
}

const SearchBox = styled.span`
    position: absolute;
    height: 100%;
    line-height: 60px;
    right: 0px;
    top: 0px;
    padding-right: 12px;
    display: inline-box;
    margin-left: auto;
    overflow: hidden;  

    & > .fas {
        font-size: 0.6em;
        color: #999;
        vertical-align: middle;
    }
`

export default SearchComponent