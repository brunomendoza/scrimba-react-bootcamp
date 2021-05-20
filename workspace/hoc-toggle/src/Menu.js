import React, {Component} from "react"
import { withToggler } from "./withToggler.js"

class Menu extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.toggler}>{this.props.togglerState ? "Hide" : "Show"} Menu </button>
                <nav style={{display: this.props.togglerState ? "block" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        ) 
    }
}

export default withToggler(Menu)