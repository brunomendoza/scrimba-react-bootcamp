import React from "react"
import Card from "./Card.js"

function App() {
    return (
        <div>
            <Card cardColor="red" height={200} width={200} />
            <Card cardColor="blue" />
            <Card cardColor="green" />
        </div>
    )
}

export default App