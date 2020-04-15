/* eslint-disable arrow-body-style */
/* eslint-disable quote-props */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Row from './Row.jsx';
import Confetti from 'react-dom-confetti';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      turn: 0,
      win: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.switchTurn = this.switchTurn.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  componentDidMount() {
    // setInterval(this.update, 300);
  }



  checkWinner() {
    let array = this.state.board.reduce((acc, val) => { return acc.concat(val); });

    // CASE: there are no more '-' characters meaning there are no more moves to be made, that means no one has one
    if (array.join('').indexOf('-') === -1) {
      console.log('lose');
      this.setState({ win: false });
    }

    if (array.join('').match(/((XXX|OOO)......)|(...(XXX|OOO)...)|(......(XXX|OOO))|[X]..[X]..[X]..|.[X]..[X]..[X].|..[X]..[X]..[X]|[O]..[O]..[O]..|.[O]..[O]..[O].|..[O]..[O]..[O]|[X]...[X]...[X]|[O]...[O]...[O]|..[X].[X].[X]..|..[O].[O].[O]../g)) {
      console.log('winner winner');
      this.setState({ win: true })
    }
  }

  handleClick(row, col) {
    if (this.state.board[row][col] === '-') {
      const board = this.state.board;

      if (this.state.turn) {
        board[row][col] = 'O';
      } else {
        board[row][col] = 'X';
      }
      this.setState({ board });
      this.checkWinner();
      this.switchTurn();
    } else {
      console.log('You can\'t do that');
    }
  }

  switchTurn() {
    const turn = !this.state.turn;
    this.setState({ turn });
  }

  resetGame() {
    this.setState({
      board: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      turn: 0,
      win: null,
    });
  }

  render() {
    const config = {
      angle: '-150',
      spread: '200',
      startVelocity: '75',
      elementCount: '300',
      dragFriction: '.1',
      duration: '9000',
      delay: '0',
      width: '9px',
      height: '9px',
      colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };

    const board = this.state.board.map((e, i) =>
    // console.log(`in rows render e is: ${e} i is ${i}`);
      <Row key={`row${i}`} row={e} curRow={i} onClick={this.handleClick} />
    );

    return (
      <div className="row flex-center">
        <div id="container">
          <h1>Tic Tac Toe</h1>
          {board}
          {this.state.win && <Modal restart={this.resetGame} win={this.state.win} />}
          {this.state.win === false && <LosingModal restart={this.resetGame} />}
        </div>
        <Confetti className={"confetti"} active={this.state.win} config={config} />
      </div>
    );
  }
}



function Modal(props) {
  return (
    <div className="wrapper-modal border border-danger">
      <div className="modal-body">
        <h4 className="modal-title">Winner!</h4>
        <h5 className="modal-subtitle">Congratulations</h5>
        <button onClick={props.restart}>Play again!</button>
      </div>
    </div>
  );
}

const LosingModal = props => {
  return (
    <div className="wrapper-modal border border-danger">
      <div className="modal-body">
        <h4 className="modal-title">Loser Loser!!</h4>
        <h5 className="modal-subtitle">Y'all both lost</h5>
        <button onClick={props.restart}>Play again!</button>
      </div>
    </div>
  );
}



render(<App />, document.getElementById('content'));
