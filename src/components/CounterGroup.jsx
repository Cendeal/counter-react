import React from 'react'
import Counter from './Counter'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.total,
            components: new Array(this.props.total).fill(0),
            sum: 0
        }
    }

    changeInput = (e) => {
        let value = 0
        if (e.target.value.match(/[0-9]+/g)) {
            value = parseInt(e.target.value)
        }
        this.setState({
            total: value
        })

    }
    confirmInput = () => {
        this.setState({
            components: new Array(this.state.total).fill(0)
        })
    }

    calculateSum = () => {
        let sum = this.state.components.reduce((result, item) => {
            return result += item
        }, 0)
        this.setState({
            sum: sum
        })

    }

    generateCounter = () => {
        return this.state.components.map((value, index) => <Counter key={index} changed={(value) => {
            this.changeCounterValue(value, index)
        }}/>)
    }

    changeCounterValue = (value, index) => {
        let temp = Array.from(this.state.components)
        temp[index] = value
        this.setState({
            components: temp
        })
    }

    render() {
        return <div>
            <input value={this.state.total} onChange={this.changeInput}/>
            <button onClick={this.confirmInput}>确定</button>
            <div>
                <input value={this.state.sum} disabled={true}/>
                <button onClick={this.calculateSum}>求和</button>
            </div>

            {this.generateCounter()}
        </div>
    }
}

export default CounterGroup