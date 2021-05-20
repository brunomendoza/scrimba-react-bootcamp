import React from "react"

function withExtraPropAdded(component) {
    const Component = component

    return function (props) {
        return (
            <Component anotherProp="blah blah blah" {...props} />
        )
    }
}

export { withExtraPropAdded }