import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    popover: {
        height: 100,
    },
    smallText: {
        fontSize: 10,
    }
});

class Modal extends Component {
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
                    <Typography className={classes.popover}>
                        Tibetan Buddhists believe that saying the mantra (prayer), 
                        Om Mani Padme Hum, out loud or silently to oneself, 
                        invokes the powerful benevolent attention and blessings of Chenrezig, 
                        the embodiment of compassion. Viewing the written form of the mantra is 
                        said to have the same effect. It is often carved into stones and 
                        placed where people can see them. 
                        It is said that all the teachings of the Buddha are 
                        contained in this mantra: Om Mani Padme Hum can not really be 
                        translated into a simple phrase or sentence.
                    </Typography>
                    </Popover>
                </div>
                <div hidden id="demo" className={classes.transparent}>
                    <div><span className="days" id="days"></span><div className="smalltext">Days</div></div>
                    <div><span className="hours" id="hours"></span><div className="smalltext">Hours</div></div>
                    <div><span className="minutes" id="minutes"></span><div className="smalltext">Minutes</div></div>
                    {/* <div><span className="seconds" id="seconds"></span><div className="smalltext">Seconds</div></div> */}
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Modal);

