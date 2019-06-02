import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Definition from './Definition';

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
    state = {
      anchorEl: null,
    };
  
    handleClick = event => {
      this.setState({
        anchorEl: event.currentTarget,
      });
    };
  
    handleClose = () => {
      this.setState({
        anchorEl: null,
      });
    };
  
    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return(
            <div>
                <div>
                    <Button
                    aria-owns={open ? 'simple-popper' : undefined}
                    aria-haspopup="true"
                    variant="contained"
                    onClick={this.handleClick}
                    >
                    What am I listening to?
                    </Button>
                    <Popover
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    >
                    <Typography className={classes.typography}>
                        <Definition />
                    </Typography>
                    </Popover>
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
