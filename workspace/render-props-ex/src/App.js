import React, { Fragment } from "react"
import DataFetcher from "./DataFetcher.js"

function App() {
    return (
        <div>
            <DataFetcher url={"https://swapi.dev/api/people/1/"}>
                {opts => {
                    if (opts.err) {
                        return <span>{opts.err}</span>
                    }

                    return opts.loading ? <p>Loading</p> : <p>{JSON.stringify(opts.data)}</p>
                }}
            </DataFetcher>
        </div>
    )
}

export default App