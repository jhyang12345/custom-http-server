import React from 'react'

class LongTouchComponent extends React.Component {
    moved = false

    state = {
        touch: true,
    }

    static defaultProps = {
        time: 500
    }

    startTimeout = () => {
        this.timeout = setTimeout(this.longPressed, this.props.time)
    }

    cancelTimeout = () => {
        clearTimeout(this.timeout)
    }

    longPressed = () => {
        if (this.props.onLongPress && this.moved === false) {
            this.props.onLongPress()
        }
    }

    onTouchStart = e => {
        console.log(e)
        this.startTimeout()
        this.moved = false
        if (typeof this.props.onTouchStart === 'function') {
            this.props.onTouchStart(e)
        }
    }

    onTouchEnd = e => {
        this.cancelTimeout()
        if (this.props.onPress && this.moved === false) {
            this.props.onPress();
        }
        if (typeof this.props.onTouchEnd === 'function') {
            this.props.onTouchEnd(e);
        }
    }

    onMove = e => {
        this.moved = true
        if (typeof this.props.onTouchMove === 'function') {
            this.props.onTouchMove(e)
        }
    }

    render() {
        const { children, disabled } = this.props
        const { touch } = this.state

        console.log(this.props)
        if (!touch || disabled) {
            return children
        }

        const props = {
            onContextMenu: e => e.preventDefault(),
            onTouchStart: this.onTouchStart,
            onTouchEnd: this.onTouchEnd,
            onTouchMove: this.onMove,
            style: {
                ...children.props.style,
                WebkitUserSelect: "none",
                WebkitTouchCallout: "none"
            }
        };

        return React.cloneElement(children, {...children.props, ...props})
    }
}

export default LongTouchComponent