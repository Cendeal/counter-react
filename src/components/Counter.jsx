import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: props.value
        }

    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            number: nextProps.value
        })
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
        return <div className="counter">
            <button onClick={this.decrease}>-</button>
            <span>{this.state.number}</span>
            <button onClick={this.increase}>+</button>
        </div>
    }
}

export default Counter