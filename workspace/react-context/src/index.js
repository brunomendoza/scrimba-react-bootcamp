import React from "react"
import ReactDOM from "react-dom"
import "./style.scss"

const ThemeContext = React.createContext()

import App from "./App.js"
// Props for context is called "value provider"
ReactDOM.render(<ThemeContext.Provider value="light"><App /></ThemeContext.Provider>, document.getElementById("root"))
