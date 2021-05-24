import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import ThemeContext from "./themeContext.js"
import "./style.scss"

// Props for context is called "value provider"
ReactDOM.render(<ThemeContext.Provider value="dark"><App /></ThemeContext.Provider>, document.getElementById("root"))
