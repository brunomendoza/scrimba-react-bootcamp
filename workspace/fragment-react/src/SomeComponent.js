import React, { Fragment } from "react"
import AnotherComponent from "./AnotherComponent.js"

function SomeComponent() {
    return (
        <Fragment>
            <h2>Some Component</h2>
            <p>Here we goes!</p>
            <AnotherComponent />
        </Fragment>
    )
}

export default SomeComponent