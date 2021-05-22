import React from "react"
import { withToggler } from "./withToggler.js"

function Favorite(props) {
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span 
                    onClick={props.toggler}
                >
                    {props.togglerState ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    ) 
}

export default withToggler(Favorite, {defaultOnValue: false})