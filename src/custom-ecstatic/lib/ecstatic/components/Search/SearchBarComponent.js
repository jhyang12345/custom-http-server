import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class SearchBarComponent extends React.Component {

    state = {
        searchText: "",
    }

    handleChange = (evt) => {
        const searchText = evt.target.value
        this.setState(() => ({
          searchText,  
        }))
    }

    render() {
        const { searchText } = this.state
        return (
            <SearchBar 
                onChange={this.handleChange}
                value={searchText}
            />
        )
    }
}

const SearchBar = styled.input.attrs({
    type: 'text',
})`
    display: inline-block;
    width: 200px;
    height: 30px;
    margin-right: 8px;
    outline: none;
    border: none;
    border-bottom: 1px solid #AAA;
`

export default SearchBarComponent