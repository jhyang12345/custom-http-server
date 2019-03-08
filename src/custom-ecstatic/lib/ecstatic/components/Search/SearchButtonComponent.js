import React from 'react'
import styled, {keyframes, css} from 'styled-components'

class SearchButtonComponent extends React.Component {

    state = {
        revealedIcon: false,
        animate: false,
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.setState(() => ({
            animate: false,
            revealedIcon: this.props.revealed,
        }))
    }

    // keep check of previous props here
    componentDidUpdate(prevProps) {
        if(prevProps.revealed != this.props.revealed) {
            this.setState(() => ({
                animate: true,
                revealedIcon: prevProps.revealed,
            }))
        }
    }

    transitionEndCallback = () => {
        if(this.state.animate === true) {
            this.setState(() => ({
                animate: false,
                revealedIcon: this.props.revealed,
            }))
        }
    }

    render() {
        const { handleFocus } = this.props
        const { revealedIcon } = this.state

        return (
            <SearchButton
                onClick={handleFocus}
                style={{ zIndex: 1 }}
                animate={this.state.animate}
                onTransitionEnd={this.transitionEndCallback}
                >
                {(
                    revealedIcon === true 
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

    opacity: ${props => props.animate === true ? 0 : 1};
    transition: opacity 0.15s ease-out;
    
    & > .fas {
        font-size: 0.6em;
        color: #999;
        vertical-align: middle;
    }
`

export default SearchButtonComponent