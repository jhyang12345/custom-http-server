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
    background-color: #FA6700;
    height: 30px;
`

export default SearchBarComponent