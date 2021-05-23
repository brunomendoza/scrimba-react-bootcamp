import React, { Component } from "react"

class Toggler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: props.startsVisible
        }
    }

    static defaultProps = {
        isVisible: false
    }

    handleToggle = () => {
        this.setState(state => ({
            isVisible: !state.isVisible,
        }))
    }

    render() {
        return (
            <div>
                {this.props.render({isVisible: this.state.isVisible, handleToggle: this.handleToggle})}
            </div>
        )
    }
}

// Toggler.defaultProps = {
//     isVisible: false
// }

export default Toggler