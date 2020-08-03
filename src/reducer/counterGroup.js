export default (state = {
    counters: new Array(2).fill(0),
    sum: 0,
    total: 0
}, action) => {
    let counters = Array.from(state.counters)
    let sum = 0
    switch (action.type) {
        case 'RESET_COUNTERS':
            counters = new Array(counters.length).fill(0)
            break
        case 'CHANGE_TOTAL_COUNTERS':
            state.total = state.data
            break
        case 'CHANGE_COUNTER_VALUE':
            counters[action.data.id] = action.data.value
            break
        case 'REMOVE_COUNTER':
            counters.splice(counters.length - 1, 1)
            break
        case 'ADD_COUNTER':
            counters.push(0)
            break
        case 'CALCULATE_SUM':
            sum = counters.reduce((result, item) => {
                return result += item
            }, 0)
            break
        default:
            return state
    }
    return {counters, sum, total: state.total}
}