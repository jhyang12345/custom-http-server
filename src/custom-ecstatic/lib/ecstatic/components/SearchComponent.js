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
            <SearchBox>
                <Search.SearchBar 
                    revealed={barRevealed}
                />
                <Search.SearchButton
                    revealed={barRevealed}
                    handleFocus={this.handleFocus}
                    />
            </SearchBox>
        )
    }
}

const SearchBox = styled.div`
    position: absolute;
    height: 100%;
    line-height: 58px;
    right: 20px;
    top: 0px;
    padding-right: 4px;
    display: inline-block;
    margin-left: auto;
    overflow: hidden;  
`

export default connect()(SearchComponent)