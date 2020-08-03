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
        }, this.confirmInput)


    }
    confirmInput = () => {
        this.setState({
            components: new Array(this.state.total).fill(0)
        }, this.calculateSum)
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
        return this.state.components.map((value, index) => {
            return <Counter value={this.state.components[index]} key={index}
                            changed={(value) => {
                                this.changeCounterValue(value, index)
                            }}/>
        })
    }

    changeCounterValue = (value, index) => {
        let temp = Array.from(this.state.components)
        temp[index] = value
        this.setState({
            components: temp
        }, this.calculateSum)
    }

    render() {
        return <div>
            <div>
                <label>个数：</label>
                <input value={this.state.total} onChange={this.changeInput}/>
            </div>
            <div>
                <label>求和：</label>
                <input value={this.state.sum} disabled={true}/>
            </div>

            {this.generateCounter()}
        </div>
    }
}

export default CounterGroup