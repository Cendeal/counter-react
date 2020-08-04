import * as action from "../../action";
import {connect} from "react-redux";
import CounterGroup from "../../components/CounterGroup";

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