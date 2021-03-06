import React from 'react'
import Board from './Board'
import calculateWinner from './util'

class Game extends React.Component {
  state = {
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    isXTurn: true,
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length -1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isXTurn ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares
      }]),
      stepNumber: history.length,
      isXTurn: !this.state.isXTurn
    })
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      isXTurn: (step % 2) === 0
    })
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, i) => {
      const desc = i ? 'Go to move #' + i : 'Go to game start'
      return (
        <li key={i}>
          <button onClick={() => this.jumpTo(i)}>{desc}</button>
        </li>
      )
    })
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game