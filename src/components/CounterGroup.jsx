import React from 'react'
import Counter from './Counter'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: props.total
        }
    }
    render() {
        return new Array(this.props.total).fill(0).map((value,index)=><Counter key={index}></Counter>)
    }
}

export default CounterGroup