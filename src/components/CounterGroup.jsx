import React from 'react'
import Counter from './Counter'

class CounterGroup extends React.Component {
    render() {
        return new Array(this.props.total).fill(0).map((value, index) => <Counter key={index}/>)
    }
}

export default CounterGroup