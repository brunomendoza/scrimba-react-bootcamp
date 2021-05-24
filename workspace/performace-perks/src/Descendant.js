import React, { memo } from "react"
import Leaf from "./Leaf.js"

function Descendant() {
    console.log("descendant")
    return (
        <div>
            <p>Descendant</p>
            <Leaf />
            <Leaf />
        </div>
    )
}

export default memo(Leaf)