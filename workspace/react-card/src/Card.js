import React from "react"
import PropTypes from "prop-types"

// class Card Extends React.Component {
//     static defaultProps = {
//         cardColor: "yellow",
//         width: 100,
//         height: 100
//     }

//     render() {
//         const styles = {
//             backgroundColor: this.props.cardColor,
//             height: this.props.height,
//             width: this.props.width
//         }

//         return (
//             <div style={styles}></div>
//         )
//     }
// }

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}

Card.propTypes = {
    cardColor: PropTypes.string.isRequired
}

Card.defaultProps = {
    width: 100,
    height: 100
}

export default Card