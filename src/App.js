import logo from './images/logo.svg';
import './css/App.css';
import CounterGroupContainer from './container/CounterGroupContainer/index';
import React from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <CounterGroupContainer/>
            </header>
        </div>
  );
}

export default App;
