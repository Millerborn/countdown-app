import React, { Component } from 'react';
import './App.css';
import Countdown from './components/Countdown/Countdown';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Countdown />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
