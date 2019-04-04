import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
    transparent: {

    }
  });

class ActiveCountdown extends Component {

    // componentDidMount() {
    //     this.countTo();
    // }

    // countTo = () => {
    //     let nowDate = new Date();
    //     // Set the date we're counting down to
    //     let countDownDate = 
    //     new Date(nowDate.getFullYear(),
    //     nowDate.getMonth(),
    //     nowDate.getDate(),2,37,0); 
    //     //20 out of 24 hours = 8pm
    //     console.log(countDownDate);
        
    //     // Update the count down every 1 second
    //     let x = setInterval(function() {

    //     // Get todays date and time
    //     var now = new Date().getTime();
            
    //     // Find the distance between now and the count down date
    //     var distance = countDownDate - now;
            
    //     // Time calculations for days, hours, minutes and seconds
    //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
    //     // Output the result in an element with id="demo" and hide hours and seconds
    //     document.getElementById("demo").innerHTML = days + "days" + hours + "hours" + minutes + "minutes" + seconds + "seconds";
    //     // document.getElementById("hide").innerHTML = days + "days" + seconds + "seconds";
            
    //     // If the count down is over, write some text 
    //     if (distance < 0) {
    //         clearInterval(x);
    //         document.getElementById("demo").innerHTML = "EXPIRED";
    //     }
    //     }, 1000);
    // }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <div hidden id="demo" className={classes.transparent}>
                    <div><span className="days" id="days"></span><div className="smalltext">Days</div></div>
                    <div><span className="hours" id="hours"></span><div className="smalltext">Hours</div></div>
                    <div><span className="minutes" id="minutes"></span><div className="smalltext">Minutes</div></div>
                    <div><span className="seconds" id="seconds"></span><div className="smalltext">Seconds</div></div>
                </div>
            </div>
        )
    }
}

ActiveCountdown.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ActiveCountdown);