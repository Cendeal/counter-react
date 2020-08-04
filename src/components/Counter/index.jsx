import React from 'react'
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            value: nextProps.value
        })
    }

    increase = () => {
        let current = this.state.number + 1
        this.setState({
            value: current
        })
        this.props.increase ? this.props.increase(current) : ''
        this.changeCounter(current)

    }

    decrease = () => {
        let current = this.state.number - 1
        this.setState({
            value: current
        })
        this.props.decrease ? this.props.decrease(current) : ''
        this.changeCounter(current)
    }

    changeCounter(val) {
        this.props.changed ? this.props.changed(val) : ''
    }

    render() {
        return <div className="counter">
            <button onClick={this.decrease}>-</button>
            <span>{this.state.value}</span>
            <button onClick={this.increase}>+</button>
        </div>
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    changed: PropTypes.func,
    increase: PropTypes.func,
    decrease: PropTypes.func
}
export default Counter