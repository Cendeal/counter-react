import logo from './images/logo.svg';
import './css/App.css';
import CounterGroup from './components/CounterGroup/index';
import React from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <CounterGroup total={5}/>
            </header>
        </div>
  );
}

export default App;
