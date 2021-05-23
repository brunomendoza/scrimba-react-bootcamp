import React from "react"
import Toggler from "./Toggler.js"

function Favorite(props) {
    return (
        <Toggler render={opts => {
            return (
                <div>
                    <h3>Click heart to favorite</h3>
                    <h1>
                        <span onClick={opts.handleToggle} >
                            {opts.isVisible ? "❤️" : "♡"}
                        </span>
                    </h1>
                </div>
            )
        }} />
    ) 
}

export default Favorite