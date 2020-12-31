
import React, { Component } from 'react';
import io from "socket.io-client";

class RenderPlayer2Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      swap: true,
      scoreP1: '',
      scoreP2: '',
      mode: props.mode
    };
  }

  componentDidMount = () => {
    const socket = io.connect(this.state.mode);

    socket.on("swap-place", (swap) => {
      this.setState({
        swap: swap
      })
    })

    socket.on("player2Score", ({ scoreP2 }) => {
      this.setState({
        scoreP2: scoreP2
      })
    })

    socket.on("player1Score", ({ scoreP1 }) => {

      this.setState({
        scoreP1: scoreP1
      })
    })
  }


  RenderScoreOfPlayer = (scoreP1, scoreP2) => {

    const { swap } = this.state;
    if (swap) {
      if (scoreP2 === '') {
        return <h3>0</h3>
      }
      return (
        <h3>{this.state.scoreP2}</h3>
      )
    }
    else if (swap === false) {
      if (scoreP1 === '') {
        return <h3>0</h3>
      }
      return (
        <h3>{this.state.scoreP1}</h3>
      )
    }
  }


  render() {
    const { scoreP1, scoreP2 } = this.state;
    return (
      <div className="P2-score">
        {this.RenderScoreOfPlayer(scoreP1, scoreP2)}
      </div>
    );
  }
}

export default RenderPlayer2Score;