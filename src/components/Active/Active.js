import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActiveCountdown from '../Active/ActiveCountdown';
import ActiveHeader from '../Header/ActiveHeader';
import Button from '@material-ui/core/Button';
import meditation from '../../sounds/meditation-music.mp3';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    cssRoot: {
      color: theme.palette.getContrastText(grey[500]),
      backgroundColor: grey[500],
      '&:hover': {
        backgroundColor: grey[700],
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
            <ActiveCountdown />      
            <Button className={classes.cssRoot} onClick={this.startStop}>
                {playing ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </Button>  
        </div>
    );
  }
}

Active.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Active);