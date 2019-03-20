import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setSearchKeyword } from "../../actions/currentDirectory";

class SearchBarComponent extends React.Component {

    handleChange = (evt) => {
        const { dispatch } = this.props
        const searchText = evt.target.value
        dispatch(setSearchKeyword(searchText))
    }

    handleTransitionEnd = (evt) => {
        const { dispatch, revealed } = this.props
        if (!revealed) {
            dispatch(setSearchKeyword(""));
        }
    }

    render() {
        const { revealed, keyword } = this.props
        return (
            <SearchBar 
                onChange={this.handleChange}
                value={keyword}
                revealed={revealed}
                onTransitionEnd={this.handleTransitionEnd}
            />
        )
    }
}

const SearchBar = styled.input.attrs({
    type: 'text',
    placeholder: 'Search...',
})`
    display: inline-block;
    width: 200px;
    height: 30px;
    margin-right: 4px;
    padding-left: 4px;
    padding-right: 4px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    vertical-align: middle;
    border-bottom: 1px solid #AAA;
    transform: ${props => props.revealed === true ? 'translateX(0%)' : 'translateX(100%)'};
    opacity: ${props => props.revealed === true ? '1' : '0'};
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    font-size: 0.7em;
    color: #333;

    &::placeholder {
        color: #CCC;
    }

`

function mapStateToProps({ currentDirectory }) {
    return {
        keyword: currentDirectory.keyword,
    }
}

export default connect(mapStateToProps)(SearchBarComponent)