import React, { Component } from 'react';
import Image from './om_mani_padme_hum.jpeg';
import './ActiveHeader.css';

class Header extends Component {
  render() {
    return (
      <div>
        <img id="headerImage" src={Image} height="120px" width="300px" opacity="0.2" alt="Om Mani Padme Hum"/>
        {/* <h1>Om Mani Padme Hum</h1> */}
      </div>
    );
  }
}

export default Header;
