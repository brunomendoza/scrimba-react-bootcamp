import React from "react"

class DataFetcher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data: null,
            err: null
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data: data, loading: false}))
            .catch(error => {
                this.setState({err: "Error loading data"})
            })
    }

    render() {
        const {loading, data, err} = this.state
        return this.props.children({loading, data, err})
    }
}

export default DataFetcher