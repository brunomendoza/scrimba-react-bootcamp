import React, { memo } from "react"
import Descendant from "./Descendant.js"

function Root() {
    console.log("root")
    return (
        <div>
            <p>Root</p>
            <Descendant />
            <Descendant />
        </div>
    )
}

// function areEqual(prevProps, nextProps) {

// }

export default memo(Root) // HOC (comparing props but not state)