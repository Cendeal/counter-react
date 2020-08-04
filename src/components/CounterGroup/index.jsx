import React from 'react'
import Counter from '../Counter/index'
import {connect} from 'react-redux';
import * as action from '../../action/index'

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


    generateCounter = () => {
        return this.props.counters.map((value, index) => {
            return <Counter value={value} key={index}
                            changed={(value) => {
                                this.changeCounterValue(value, index)
                            }}/>
        })
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
            {this.generateCounter()}
        </div>
    }
}

const mapStateToProps = state => ({...state.counterGroup});

const mapDispatchToProps = dispatch => ({
    removeCounter: () => dispatch(action.removeCounter()),
    addCounter: () => dispatch(action.addCounter()),
    changeCounterValue: data => dispatch(action.changeCounterValue(data)),
    calculateSum: () => dispatch(action.calculateSum()),
    changeTotalCounter: data => dispatch(action.changeTotalCounter(data)),
    resetCounters: data => dispatch(action.resetCounters(data))

});

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)