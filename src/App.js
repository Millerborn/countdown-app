import React, { Component } from 'react';
import './App.css';
import Countdown from './components/Countdown/Countdown';
import NavBar from './components/Nav/nav';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Countdown/>
        <Footer/>
      </div>
    );
  }
}

export default App;
