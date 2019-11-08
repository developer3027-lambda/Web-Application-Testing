import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import './dashboard.css';


function Dashboard() {
    const [hit, setHit] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [bat, setBat] = useState(0);
    const [ball, setBall] = useState(0);
  
    function Hit() {
        setHit(hit + 1);
        setBall(0);
        setStrike(0);
    }

    function Ball() {
      if (ball < 4) {
        setBall(ball + 1)
      }else{
        setBall(0);
        setStrike(0);
      }
    }

    function Strike() {
        if (strike < 3) {
            setStrike(strike + 1)
        }else{
            setStrike(0);
            setBall(0);
        }
    }

    function Foul() {
        if (strike === 0) {
            setStrike(1)
        }else{
            setStrike(2)
           }
        }

    return (
        <div className="App-header">
            <Scoreboard ball={ball} strike={strike} hit={hit} foul={foul} />
            <div className="btnFrame">
                <button className="button"
                onClick={Ball}>Ball</button>
                <button className="button"
                onClick={Strike}>Strikes</button>
                <button className="button"
                onClick={Foul}>Foul</button>
                <button className="button"
                onClick={Hit}>Hit</button>
            </div>
        </div>
    )
}
export default Dashboard