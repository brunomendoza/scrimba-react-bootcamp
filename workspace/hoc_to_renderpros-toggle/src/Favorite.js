import React from "react"
import Toggler from "./Toggler.js"

function Favorite(props) {
    return (
        <Toggler opts={({isVisible: false})} render={(isVisible, toggle) => (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span onClick={toggle} >
                        {isVisible ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        )} />
    ) 
}

export default Favorite