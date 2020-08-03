import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    increase = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    decrease = () => {
        this.setState({
            number: this.state.number - 1
        })
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