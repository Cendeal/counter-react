import React from 'react'
import Counter from '../Counter/index'
import {connect} from 'react-redux';
import * as action from '../../action/index'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.total,
            counters: this.props.counters,
            sum: 0
        }
    }

    changeInput = (e) => {
        let value = 0
        if (e.target.value.match(/[0-9]+/g)) {
            value = parseInt(e.target.value)
            value = value < 0 ? 0 : value
        }
        this.setState({
            total: value
        }, this.confirmInput)


    }
    confirmInput = () => {
        this.setState({
            counters: new Array(this.state.total).fill(0),
            sum: 0
        })
    }

    calculateSum = () => {
        let sum = this.state.counters.reduce((result, item) => {
            return result += item
        }, 0)
        this.setState({
            sum: sum
        })

    }

    generateCounter = () => {
        return this.state.counters.map((value, index) => {
            return <Counter value={this.state.counters[index]} key={index}
                            changed={(value) => {
                                this.changeCounterValue(value, index)
                            }}/>
        })
    }
    changeCounterValue = (value, index) => {
        let temp = Array.from(this.state.counters)
        temp[index] = value
        this.setState({
            counters: temp
        }, this.calculateSum)
    }

    render() {
        return <div>
            <div>
                <label>个数：</label>
                <input type='number' value={this.state.total} onChange={this.changeInput}/>
            </div>
            <div>
                <label>求和：</label>
                <input value={this.state.sum} disabled={true}/>
            </div>

            {this.generateCounter()}
        </div>
    }
}

const mapStateToProps = state => ({counters: state.counters});

const mapDispatchToProps = dispatch => ({
    removeCounter: data => dispatch(action.removeCounter(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)