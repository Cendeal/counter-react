import React from 'react'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: props.value
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.number !== props.value) {
            return {
                number: props.value
            }
        }
        return null;
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

export default Index