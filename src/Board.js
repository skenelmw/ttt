import React from 'react'
import Square from './Square'

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
      // Lily:
      // let write = ""
      // if (this.state.turn){
      //   write = 'X'
      //   this.setState({turn: false})
      // } else {
      //   write = 'O'
      //   this.setState({turn: true})
      // }
      // const squares = this.state.squares.slice()
      // squares[i] = write
      // this.setState({squares})
      
      // Cam:
      const squares = this.state.squares.slice()
      squares[i] = this.state.isXTurn ? 'X' : 'O'
      this.setState({squares, isXTurn: !this.state.isXTurn})


    }
    render() {
      const status = 'Next player: X';
  
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