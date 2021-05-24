import React, { Component } from "react"
import Button from "./Button.js"
import ThemeContext from "./themeContext.js"

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const theme = this.context
        
        return (
            <header className={`${theme}-theme`}>
                <h2>Light Theme</h2>
            </header>
        )
    }
}

Header.contextType = ThemeContext

export default Header