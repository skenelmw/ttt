import React from 'react'
import Square from './Square'
import calculateWinner from './util'

class Board extends React.Component {
    state = {
        squares: Array(9).fill(null),
        isXTurn: true
    }
    renderSquare(i) {
      const val = this.state.squares[i]
      return <Square value={val} onClick={() => this.handleClick(i)}/>;
    }
    handleClick(i) {
    
      const squares = this.state.squares.slice()
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.isXTurn ? 'X' : 'O'
      this.setState({squares, isXTurn: !this.state.isXTurn})


    }
    render() {
      const winner = calculateWinner(this.state.squares)
      let status = winner ? 'Winner: ' + winner : 'Next player: ' + (this.state.isXTurn ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
export default Board