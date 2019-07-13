import React, { Component } from 'react';
import { render } from 'react-dom';

class Box extends React.Component {
  render() {
    return (
      <div className="Box">
        <h1 className="XO"> {this.props.text} </h1>
      </div>
    );
  }
}

export default Box;
