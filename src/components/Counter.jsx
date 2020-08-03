import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }

    }

    increase = () => {
        let current = this.state.number + 1
        this.setState({
            number: current
        })
        this.changeCounter(current)

    }
    decrease = () => {
        let current = this.state.number - 1
        this.setState({
            number: current
        })
        this.changeCounter(current)
    }

    changeCounter(val) {
        this.props.changed(val)
    }

    render() {
        return <div>
            <button onClick={this.decrease}>-</button>
            <mark>{this.state.number}</mark>
            <button onClick={this.increase}>+</button>
        </div>
    }
}

export default Counter