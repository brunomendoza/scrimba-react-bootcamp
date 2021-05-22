import React from "react"
import { withToggler } from "./withToggler.js"

function Menu(props) {
    return (
        <div>
            <button onClick={props.toggler}>{props.togglerState ? "Hide" : "Show"} Menu </button>
            <nav style={{display: props.togglerState ? "block" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <a>Your Profile</a>
                <a>Your Repositories</a>
                <a>Your Stars</a>
                <a>Your Gists</a>
            </nav>
        </div>
    ) 
}

export default withToggler(Menu, {defaultOnValue: true})