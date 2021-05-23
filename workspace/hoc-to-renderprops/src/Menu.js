import React from "react"
import Toggler from "./Toggler.js"

function Menu(props) {
    return (
        <Toggler startsVisible={true} render={(isVisible, toggle) => {
            return (
                <div>
                    <button onClick={toggle}>{isVisible ? "Hide" : "Show"} Menu </button>
                    <nav style={{display: isVisible ? "block" : "none"}}>
                        <h6>Signed in as Coder123</h6>
                        <a>Your Profile</a>
                        <a>Your Repositories</a>
                        <a>Your Stars</a>
                        <a>Your Gists</a>
                    </nav>
                </div>
            )
        }}/>
    ) 
}

export default Menu