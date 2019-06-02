import React, { Component } from 'react';
import './countdown.css';
import Waiting from '../Waiting/Waiting';
import Active from '../Active/Active';
import '../Header/ActiveHeader.css';

let curDay;
let secTime;
let ticker;

class Countdown extends Component {

    state = {
        seconds: 0,
    }

    componentDidMount() {
        this.getSeconds();
    }

    getSeconds = () => {

        //Set for 6pm, Sunday
        let nowDate = new Date();
        let dy = 3; //Sunday through Saturday, 0 to 6
        let counterTime = 
        new Date(nowDate.getFullYear(),
        nowDate.getMonth(),
        nowDate.getDate(),15,1,0); 
        
        let curtime = nowDate.getTime(); //current time
        let atime = counterTime.getTime(); //countdown time
        let diff = parseInt((atime - curtime)/1000);
        if (diff > 0) { curDay = dy - nowDate.getDay() }
        else { curDay = dy - nowDate.getDay() -1 } //after countdown time
        if (curDay < 0) { curDay += 7; } //already after countdown time, switch to next week
        if (diff <= 0) { diff += (86400 * 7) }
        this.startTimer(diff);
    }
        
    startTimer = (secs) => {
        secTime = parseInt(secs);
        ticker = setInterval(this.tick,1000);
        this.tick(); //initial count display
    }
        
    tick = () => {
        this.setState({
            seconds: secTime
        })
        let secs = secTime;
        if (secs>0) {
         secTime--;
        }
        else {
         clearInterval(ticker);
         this.getSeconds(); //start over
        }
        
        // let days = Math.floor(secs/86400);
        secs %= 86400;
        let hours= Math.floor(secs/3600);
        secs %= 3600;
        let mins = Math.floor(secs/60);
        secs %= 60;
        
        // update the time display
        document.getElementById("days").innerHTML = curDay;
        document.getElementById("hours").innerHTML = ((hours < 10 ) ? "0" : "" ) + hours;
        document.getElementById("minutes").innerHTML = ( (mins < 10) ? "0" : "" ) + mins;
        document.getElementById("seconds").innerHTML = ( (secs < 10) ? "0" : "" ) + secs;
    }

    render() {
        const { seconds } = this.state;
        let waiting = (seconds > 597000 ? <Active /> : <Waiting />)
    return (
        <div id="active">{waiting}</div>
    );
  }
}

export default (Countdown);
