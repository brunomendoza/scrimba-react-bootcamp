import React, { Component } from "react"
import ThemeContext from "./themeContext.js"

class Button extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.context)
        return (
            <button className={`${this.context}-theme`}>Switch Theme</button>
        )
    }
}

// Setting this static property now it si possible to accessing class member
// or field "this.context"
Button.contextType = ThemeContext

export default Button