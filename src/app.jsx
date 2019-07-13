/* eslint-disable quote-props */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Box from './Box.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { button: 'X' };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    setInterval(this.update, 300);
  }

  update() {
    if (this.state.button === 'X') {
      this.setState({ button: 'O' });
    } else if (this.state.button === 'O') {
      this.setState({ button: 'X' });
    }
  }

  // }
  //componentWillUnmount ->  clearInterval

  // setInterval(alternateButton, 300);

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Box text={this.state.button} />
      </div>
    );
  }
}
//}

//callback within setTImeout that changes state

// class Box extends React.Component {
//   render() {
//     return (
//       <div className="Box">
//         <h1> {this.props.text} </h1>
//       </div>
//     );
//   }
// }

// function Box(props) {
//   return <div> {' '} <h1>Tic Tac Toe</h1> {' '} </div>;
// }

// className="Box" style={{ borderStyle: 'solid', height: '100px', width: '100px' }}

// const Box = props => {
//   <div style={{ borderStyle: 'solid', height: '100px', width: '100px' }}></div>;
// };

render(<App />, document.getElementById('content'));
// render(<Box />, document.getElementById('content'));
