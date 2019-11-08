import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Dashboard from './components/Dashboard';
import logo from './logo.svg';
import './App.css';

function App() {
  const [player, setPlayer] = useState("");
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  function takeBase() {
    console.log('function here')
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Scoreboard />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
