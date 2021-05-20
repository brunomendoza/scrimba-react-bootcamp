import React from "react"

function withFavouriteNumber(component) {
    const Component = component

    return function(props) {
        return <Component favoriteNumber={6} {...props} />
    }
}

export { withFavouriteNumber }