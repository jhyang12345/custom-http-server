import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
import { SearchBarComponent } from './Search'

class SearchComponent extends React.Component {
    render() {
        return (
            <SearchBox>
                <SearchBarComponent />
                <i className="fas fa-search"></i>
            </SearchBox>
        )
    }
}

const SearchBox = styled.span`
    position: absolute;
    height: 100%;
    line-height: 60px;
    right: 0px;
    top: 0px;
    padding-right: 12px;
    display: inline-box;
    margin-left: auto;
    

    & > .fas {
        font-size: 0.6em;
        color: #999;
        vertical-align: middle;
    }
`

export default SearchComponent