import React from 'react';
import '../Countdown/countdown.css';
import Header from './WaitingHeader';
import About from '../About/About';

const Waiting = () => (
    <div>
        <Header />
        <div id="countholder">
            <div><span className="days" id="days"></span><div className="smalltext">Days</div></div>
            <div><span className="hours" id="hours"></span><div className="smalltext">Hours</div></div>
            <div><span className="minutes" id="minutes"></span><div className="smalltext">Minutes</div></div>
            {/* <div><span className="seconds" id="seconds"></span><div className="smalltext">Seconds</div></div> */}
        </div>
        <About />
    </div>
);

export default Waiting;
