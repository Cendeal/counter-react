import React from 'react'
import Counter from './Counter'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.total,
            components: new Array(this.props.total).fill(0)
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

    generateCounter = () => {
        return this.state.components.map((value, index) => <Counter key={index}/>)
    }

    render() {
        return <div>
            <input value={this.state.total} onChange={this.changeInput}/>
            <button onClick={this.confirmInput}>确定</button>
            {this.generateCounter()}
        </div>
    }
}

export default CounterGroup