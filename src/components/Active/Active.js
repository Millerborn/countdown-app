import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActiveCountdown from '../Active/ActiveCountdown';
import ActiveHeader from '../Header/ActiveHeader';
import Time from '../Countdown/time';
import Button from '@material-ui/core/Button';
import meditation from '../../sounds/om_mani_padme_hum.mp3';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import '../../App.css';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    cssRoot: {
      color: theme.palette.getContrastText(grey[300]),
      backgroundColor: grey[300],
      '&:hover': {
        backgroundColor: grey[600],
      },
    }
  });

class Active extends Component {

    state = {
        playing: false,
        song: new Audio(meditation)
    }

    componentDidMount() {
        this.startStop()
    }

    startStop = () => {
        if (this.state.playing) {
            clearInterval(this.timer);
            this.setState({
                playing: false
          });
          this.state.song.pause();
        } else {
          this.setState(
            {
              playing: true
            },
            this.playClick
          );
        }
    };

    playClick = () => {
        this.state.song.play();
    }
    
    render() {
        const { classes } = this.props;
        const { playing } = this.state;
    return (
        <div>
            <ActiveHeader />
            <Button id="sound-button" className={classes.cssRoot} onClick={this.startStop}>
                {playing ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </Button>
            <Time />
            <ActiveCountdown />
        </div>
    );
  }
}

Active.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Active);