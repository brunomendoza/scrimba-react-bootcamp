import React from "react"
import PropTypes from "prop-types"

function RoundedImage(props) {
    return (
        <img src={props.src}
        style={{borderRadius: props.borderRadius}}
        className="rounded-img" />
    )
}
 
RoundedImage.propTypes = {
    src: PropTypes.string.isRequired,
    borderRadius: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

RoundedImage.defaultProps = {
    borderRadius: "50%"
}

export default RoundedImage