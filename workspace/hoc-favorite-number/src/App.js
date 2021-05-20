import React from "react"
import { withFavouriteNumber } from "./WithFavouriteNumber"

function App(props) {
    return (
        <div>{props.favoriteNumber}</div>
    )
}

export default withFavouriteNumber(App)
