import React, { Component } from "react"

class Toggler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTogglerOn: this.props.defaultOnValue,
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

function withToggler(component, opts) {
    return function(props) {
        return (
            <Toggler component={component} defaultOnValue={opts.defaultOnValue} {...props} />
        )
    }
}

export { withToggler }