import React, { Component } from "react"

class Toggler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: props.opts.isVisible
        }
    }

    handleToggle = () => {
        this.setState(state => ({
            isVisible: !state.isVisible,
        }))
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.isVisible, this.handleToggle)}
            </div>
        )
    }
}

export default Toggler