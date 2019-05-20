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
        if(keyword !== "" && keyword !== undefined) {
            console.log("Show bar!")
            this.setState(() => ({
                barRevealed: true,
            }))
        } else if(keyword === "") {
            console.log("Hide bar!")
            this.setState(() => ({
                barRevealed: false
            }));
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
        } else if (prevProps.keyword !== keyword &&
            (keyword === "" || keyword === undefined)) {
            this.setState(() => ({
                barRevealed: false,
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
            <Search.Box>
                <Search.Bar 
                    revealed={barRevealed}
                />
                <Search.Button
                    revealed={barRevealed}
                    handleFocus={this.handleFocus}
                    />
            </Search.Box>
        )
    }
}

function mapStateToProps({ currentDirectory }) {
    return {
        keyword: currentDirectory["keyword"],
    }
}

export default connect(mapStateToProps)(SearchComponent)