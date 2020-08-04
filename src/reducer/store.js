import {combineReducers, createStore} from 'redux'
import counterGroup from "./counterGroup";

const reducer = combineReducers({
    counterGroup
})
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
