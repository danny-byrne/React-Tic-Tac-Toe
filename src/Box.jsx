import React, { Component } from 'react';
import { render } from 'react-dom';

class Box extends React.Component {
  render() {
    return (
      // <div className="Box">
      <button className="XO" onClick={this.props.onClick}>
        {this.props.button}
      </button>
      // </div>
    );
  }
}

export default Box;
