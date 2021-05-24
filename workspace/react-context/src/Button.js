import React, { Component } from "react"
// import ThemeContext from "./themeContext.js"

class Button extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <button className="light-theme">Switch Theme</button>
        )
    }
}

export default Button