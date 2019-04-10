import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
import Search from './Search'
import { setSearchKeyword } from '../actions/currentDirectory'

class SearchComponent extends React.Component {

    state = {
        barRevealed: false,
    }

    handleFocus = () => {
        this.setState((prevState) => ({
            barRevealed: !prevState.barRevealed,
        }))
        
    }

    render() {
        const { barRevealed } = this.state
        return (
            <Search.SearchBox>
                <Search.SearchBar 
                    revealed={barRevealed}
                />
                <Search.SearchButton
                    revealed={barRevealed}
                    handleFocus={this.handleFocus}
                    />
            </Search.SearchBox>
        )
    }
}

export default connect()(SearchComponent)