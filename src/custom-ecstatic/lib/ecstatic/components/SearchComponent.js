import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
import Search from './Search'
import { setSearchKeyword } from '../actions/currentDirectory'

class SearchComponent extends React.Component {

    state = {
        barRevealed: false,
    }

    componentDidMount() {
        const { keyword } = this.props
        console.log("Keyword", keyword)
        if(keyword !== "" && keyword !== undefined) {
            console.log("Show bar!")
            this.setState(() => ({
                barRevealed: true,
            }))
        }
    }

    componentDidUpdate(prevProps, prevStates) {
        const { keyword } = this.props
        if(prevStates.barRevealed === false && 
            prevProps.keyword !== keyword &&
            keyword !== "" && keyword !== undefined) {
            this.setState(() => ({
                barRevealed: true,
            }))
        }
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

function mapStateToProps({ currentDirectory }) {
    return {
        keyword: currentDirectory["keyword"],
    }
}

export default connect(mapStateToProps)(SearchComponent)