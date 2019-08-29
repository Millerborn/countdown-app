import React, { Component } from 'react';
import Image from './om_mani_padme_hum.jpeg'
import '../Active/css/header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <img id="headerImage" src={Image} height="120px" width="300px" opacity="0.2" alt="Om Mani Padme Hum"/>
      </div>
    );
  }
}

export default Header;
