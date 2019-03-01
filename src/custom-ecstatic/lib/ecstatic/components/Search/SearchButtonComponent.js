import React from 'react'
import styled, {keyframes} from 'styled-components'

class SearchButtonComponent extends React.Component {

    state = {
        animate: false,
    }

    componentDidUpdate(prevProps) {
        if(prevProps.revealed != this.props.revealed) {
            this.setState(() => ({
                animate: true,
            }))
        }
    }

    render() {
        const { handleFocus, revealed } = this.props
        console.log("animate", this.state.animate)
        return (
            <SearchButton
                onClick={handleFocus}
                style={{ zIndex: 1 }}
                animate={this.state.animate}
                >
                {(
                    revealed === true 
                    ? <i className="fas fa-times"></i>
                    : <i className="fas fa-search"></i>
                )}
            </SearchButton>
        )
    }
}

const iconAnimation = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const SearchButton = styled.span`
    display: inline-block;
    height: 100%;
    line-height: 60px;
    padding: 8px;
    position: relative;

    animation: ${iconAnimation} 1s ease-in-out;
    
    & > .fas {
        font-size: 0.6em;
        color: #999;
        vertical-align: middle;
    }
`

export default SearchButtonComponent