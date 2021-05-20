import React, {Component} from "react"
import { withToggler } from "./withToggler.js"

class Favorite extends Component {
    render() {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={this.props.toggler}
                    >
                        {this.props.togglerState ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        ) 
    }
}

export default withToggler(Favorite)