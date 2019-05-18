import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setSearchKeyword } from "../../actions/currentDirectory";

class SearchBarComponent extends React.Component {

    constructor(props) {
        super(props)
        this.searchBarRef = React.createRef()
    }

    handleChange = (evt) => {
        const { dispatch } = this.props
        const searchText = evt.target.value
        dispatch(setSearchKeyword(searchText))
    }

    handleEnter = (evt) => {
        const { history } = this.props
        if(evt.key == 'Enter'){
            const searchText = evt.target.value
            history.push({
                pathname: history.pathname,
                search: `?query=${searchText}`,
            })
        }
    }

    handleTransitionEnd = (evt) => {
        const { dispatch, revealed } = this.props
        if (!revealed) {
            dispatch(setSearchKeyword(""));
        } else if(revealed) {
            // focus on revealed
            this.searchBarRef.current.focus()
        }
    }

    render() {
        const { revealed, keyword } = this.props
        return (
            <SearchBar 
                ref={this.searchBarRef}
                onChange={this.handleChange}
                onKeyPress={this.handleEnter}
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

export default withRouter(connect(mapStateToProps)(SearchBarComponent))