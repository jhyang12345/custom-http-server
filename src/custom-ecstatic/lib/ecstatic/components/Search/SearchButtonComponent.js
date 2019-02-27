import React from 'react'
import styled from 'styled-components'

class SearchButtonComponent extends React.Component {

    render() {
        const { handleFocus, revealed } = this.props
        return (
            <SearchButton
                onClick={handleFocus}
                style={{ zIndex: 1 }}>
                {(
                    revealed === true 
                    ? <i className="fas fa-times"></i>
                    : <i className="fas fa-search"></i>
                )}
                
            </SearchButton>
  
        )
    }
}

const SearchButton = styled.span`
    display: inline-block;
    height: 100%;
    line-height: 60px;
    padding: 8px;
    position: relative;

    & > .fas {
        font-size: 0.6em;
        color: #999;
        vertical-align: middle;
    }
`

export default SearchButtonComponent