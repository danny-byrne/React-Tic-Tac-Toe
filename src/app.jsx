/* eslint-disable quote-props */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Row from './Row.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { button: 'X' };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    // setInterval(this.update, 300);
  }

  onClick() {
    if (this.state.button === 'X') {
      this.setState({ button: 'O' });
    } else if (this.state.button === 'O') {
      this.setState({ button: 'X' });
    }
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Row button={this.state.button} onClick={this.onClick} />
      </div>
    );
  }
}

render(<App />, document.getElementById('content'));
