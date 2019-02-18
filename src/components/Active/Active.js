import React, { Component } from 'react';
import Header from '../Header/ActiveHeader';
import Waiting from '../Waiting/Waiting';
import meditation from '../../sounds/meditation-music.mp3';
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
        console.log('playing');
        this.state.song.play();
    }
    
    render() {
        const { playing } = this.state;
    return (
        <div>
            <Header /><div hidden><Waiting /></div>
            <button onClick={this.startStop}>
                {playing ? 'Pause' : 'Start'}
            </button>        
        </div>
    );
  }
}

export default (Active)
