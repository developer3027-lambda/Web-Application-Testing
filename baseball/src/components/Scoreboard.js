import React, { useState } from 'react';
import './scoreboard.css';


function Scoreboard() {

    return(
        <div>
            <div className="topScore">
                
                <div className="home">
                    <h2>Home</h2>
                    <p>04</p>
                </div>
                <div className="inn">
                    <h2>Inn</h2>
                    <p>07</p>
                </div>
                <div className="guest">
                    <h2>Guest</h2>
                    <p>06</p>
                </div>
                
            </div>
            <div className="bottomScore">
                <div className="atBat">
                    <h3>Bat</h3>
                    <p>37</p>
                </div>
                <div className="ball">
                    <h3>Ball</h3>
                    <p>02</p>
                </div>
                <div className="strike">
                    <h3>Strike</h3>
                    <p>01</p>
                </div>
                <div className="pitch">
                    <h3>Pitch</h3>
                    <p>55</p>
                </div>
            </div>
        </div>
    )
}

export default Scoreboard