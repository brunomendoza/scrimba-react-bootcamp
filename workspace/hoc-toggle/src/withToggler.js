import React, { Component } from "react"

class Toggler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTogglerOn: false,
        }
    }

    handleToggler = () => {
        this.setState(state => ({
            isTogglerOn: !state.isTogglerOn,
        }))
    }

    render() {
        const Component = this.props.component
        return (
            <Component toggler={this.handleToggler} togglerState={this.state.isTogglerOn} {...this.props} />
        )
    }
}

function withToggler(component) {
    return function(props) {
        return (
            <Toggler component={component} {...props} />
        )
    }
}

export { withToggler }