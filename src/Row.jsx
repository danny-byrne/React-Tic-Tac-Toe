import React, { Component } from 'react';
import { render } from 'react-dom';
import Box from './Box.jsx';

class Row extends React.Component {
  render() {
    return (
      <div className="Row">
        <Box button={this.props.button} onClick={this.props.onClick} />
        <Box button={this.props.button} onClick={this.props.onClick} />
        <Box button={this.props.button} onClick={this.props.onClick} />
      </div>
    );
  }
}

export default Row;
