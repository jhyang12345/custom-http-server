import React from 'react'
import styled, {keyframes, css} from 'styled-components'

class SearchButtonComponent extends React.Component {

    state = {
        animate: false,
    }

    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.revealed != this.props.revealed) {
            this.setState(() => ({
                animate: true,
            }))
        }
    }

    animationEndCallback = () => {
        console.log("animationEndCallback")
        this.setState(() => ({
            animate: false,
        }))
    }

    render() {
        const { handleFocus, revealed } = this.props

        return (
            <SearchButton
                onClick={handleFocus}
                style={{ zIndex: 1 }}
                animate={this.state.animate}
                onAnimationEnd={this.animationEndCallback}
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

const animation = props => (
    props.animate == true 
    ? css`
        ${iconAnimation} 0.5s ease-in-out;
        `
    : null
)


const SearchButton = styled.span`
    display: inline-block;
    height: 100%;
    line-height: 60px;
    padding: 8px;
    position: relative;

    animation: ${animation};
    
    & > .fas {
        font-size: 0.6em;
        color: #999;
        vertical-align: middle;
    }
`

export default SearchButtonComponent