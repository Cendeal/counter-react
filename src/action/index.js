export const changeCounterValue = data => ({
    type: 'CHANGE_COUNTER_VALUE',
    data
})

export const removeCounter = data => ({
    type: 'REMOVE_COUNTER'
})

export const addCounter = () => ({
    type: 'ADD_COUNTER'
})


export const calculateSum = () => ({
    type: 'CALCULATE_SUM'
})

export const changeTotalCounter = data => ({
    type: 'CHANGE_TOTAL_COUNTERS',
    data
})
export const resetCounters = () => ({
    type: 'RESET_COUNTERS'
})