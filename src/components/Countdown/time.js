import React from 'react';

export default class Time extends React.Component {
    render(){
      return (
        <div>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
      );
    }
}