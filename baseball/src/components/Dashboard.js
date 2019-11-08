import React, { useState } from 'react';
import './dashboard.css';

function Dashboard() {

    return (
        <div>
            <button className="button">Ball</button>
            <button className="button">Strikes</button>
            <button className="button">Foul</button>
            <button className="button">Hit</button>
        </div>
    )
}
export default Dashboard