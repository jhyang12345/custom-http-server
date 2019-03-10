import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
import { SearchBarComponent, SearchButtonComponent } from './Search'
import { setSearchKeyword } from '../actions/currentDirectory'

class SearchComponent extends React.Component {

    state = {
        barRevealed: true,
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
                <SearchBarComponent 
                    revealed={barRevealed}
                />
                <SearchButtonComponent
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
    right: 0px;
    top: 0px;
    padding-right: 12px;
    display: inline-block;
    margin-left: auto;
    overflow: hidden;  
`

export default connect()(SearchComponent)