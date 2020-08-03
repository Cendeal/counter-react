export default (state = new Array(2).fill(0), action) => {
    switch (action.type) {
        case 'CHANGE_COUNTER_VALUE':
            state[action.data.id] = action.data.value
            break
        case 'REMOVE_COUNTER':
            state.splice(action.data.id, 1)
            break
        case 'ADD_COUNTER':
            state.push(action.data)
    }
    return state
}