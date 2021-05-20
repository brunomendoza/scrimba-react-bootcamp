import React from "react"
import { withPointlessHOC } from "./withPointlessHOC.js"
import { withExtraPropAdded } from "./withExtraPropAdded.js"

function App(props) {
    console.log(props.anotherProp)
    return (
        <div>Hello world!</div>
    )
}

const ExtraPropComponent = withExtraPropAdded(App)
export default ExtraPropComponent