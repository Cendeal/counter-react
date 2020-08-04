import React from 'react'
import Counter from '../Counter/index'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    changeInput = (e) => {
        let value = parseInt(e.target.value)
        value = value < 0 ? 0 : value
        if (value < this.props.counters.length) {
            this.props.removeCounter()
        } else {
            this.props.addCounter()
        }
        this.props.resetCounters()
    }

    changeCounterValue = (value, index) => {
        this.props.changeCounterValue({value, id: index})
        this.props.calculateSum()
    }

    render() {
        return <div className={'counter-group'}>
            <div className={'item'}>
                <label>个数：</label>
                <input type='number' value={this.props.counters.length} onChange={this.changeInput}/>
            </div>
            <div className={'item'}>
                <label>求和：</label>
                <input value={this.props.sum} disabled={true}/>
            </div>
            {this.props.counters.map((value, index) => {
                return <Counter value={value} key={index}
                                changed={(value) => {
                                    this.changeCounterValue(value, index)
                                }}/>
            })}
        </div>
    }
}

export default CounterGroup