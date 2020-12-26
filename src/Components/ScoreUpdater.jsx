import React, { Component } from 'react';
import io from "socket.io-client";

let scoreP1 = 0,
  scoreP2 = 0;

class ScoreHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disablePlus: false,
      disableMinus: true,
      scoreP1: scoreP1,
      scoreP2: scoreP2,
      player: props.player,
      path: window.location.pathname
    };
  }

  ChangeValue = (e) => {
    const socket = io.connect(this.props.mode);
    const { player } = this.state;
    let score;
    if (this.state.path === '/admin/panel/ft5') {
      score = 5;
    }
    else if (this.state.path === '/admin/panel/ft10') {
      score = 10;
    }
    else {
      score = 3;
    }
    if (player === "Player-1") {
      if (e.target.value === '+') {
        scoreP1++

        if (scoreP1 >= score) {
          this.setState({
            disablePlus: true,
            disableMinus: false
          })
        }
        else if (scoreP1 < 2 && scoreP1 > 0) {
          this.setState({
            disableMinus: false
          })
        }
        this.setState({
          scoreP1: scoreP1
        })
        socket.emit('playerScore', { player, scoreP1 })
      }
      else if (e.target.value === '-') {
        scoreP1--
        if (scoreP1 <= 0) {
          this.setState({
            disablePlus: false,
            disableMinus: true
          })
        }
        this.setState({
          scoreP1: scoreP1
        })
        socket.emit('playerScore', { player, scoreP1 })
      }
    }

    if (player === "Player-2") {
      if (e.target.value === '+') {
        scoreP2++
        if (scoreP2 >= score) {
          this.setState({
            disablePlus: true,
            disableMinus: false
          })
        }
        else if (scoreP2 < 2 && scoreP2 > 0) {
          this.setState({
            disableMinus: false
          })
        }
        this.setState({
          scoreP2: scoreP2
        })
        socket.emit('playerScore', { player, scoreP2 })
      }
      else if (e.target.value === '-') {
        scoreP2--
        if (scoreP2 <= 0) {
          this.setState({
            disablePlus: false,
            disableMinus: true
          })
        }
        this.setState({
          scoreP2: scoreP2
        })
        socket.emit('playerScore', { player, scoreP2 })
      }
    }
  }

  render() {
      return (
        <div className={`scorehandler-wrapper ${this.props.player}`}>
          <input type="number" min={0} max={3} value={this.state.scoreP1} onChange={this.ChangeValue} />
          <div className="quantity-nav">
            <button type="button" className={`quantity-button quantity-up ${this.state.disablePlus ? 'btn-disabled' : ''}`} disabled={this.state.disablePlus} value="+" onClick={this.ChangeValue}>+</button>
            <button type="button" className={`quantity-button quantity-down ${this.state.disableMinus ? 'btn-disabled' : ''}`} value="-" disabled={this.state.disableMinus} onClick={this.ChangeValue}>-</button>
          </div>
        </div>
      );
  }
}

export default ScoreHandler;