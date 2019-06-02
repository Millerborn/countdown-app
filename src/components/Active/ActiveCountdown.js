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
    
    render() {
        const { classes } = this.props;
        return(
            <div>
                <div>
                    <h2>{new Date().toLocaleTimeString()}</h2>
                </div>
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