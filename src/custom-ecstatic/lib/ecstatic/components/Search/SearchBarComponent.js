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
        const { revealed } = this.props
        return (
            <SearchBar 
                onChange={this.handleChange}
                value={searchText}
                revealed={revealed}
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
    z-index: 0;
    transform: ${props => props.revealed === true ? 'translateX(0%)' : 'translateX(100%)'};
    opacity: ${props => props.revealed === true ? '1' : '0'};
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
`

export default SearchBarComponent