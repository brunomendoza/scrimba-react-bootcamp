import React, { useState } from "react"
import Root from "./Root.js"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <p>App</p>
            <Root count={count} />
            <Root />
        </div>
    )
}

export default App