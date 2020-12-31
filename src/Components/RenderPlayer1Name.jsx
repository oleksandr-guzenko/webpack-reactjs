import React, { Component } from 'react';
import io from "socket.io-client";

class RenderPlayer1Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: '',
      player2: '',
      swap: true,
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

    socket.on("player2name", (playerName) => {

      this.setState({
        player2: playerName
      })
    })
    socket.on("player1name", (playerName) => {
      this.setState({
        player1: playerName
      })
    })
  }

  renderNameOfPlayer = (player1, player2) => {
    const { swap } = this.state;
    if (swap) {
      if (player1 === "" || player1 === "empty") {
        return <h3>team | player1</h3>
      }
      return (
        <h3>
          {player1}
        </h3>
      )
    }
    else if (swap === false) {
      if (player2 === "" || player2 === "empty") {
        return <h3>team | player2</h3>
      }

      return (
        <h3>
          {player2}
        </h3>
      )
    }
  }


  render() {
    const { player1, player2 } = this.state;
    return (
      <div className="P1-name">
        {this.renderNameOfPlayer(player1, player2)}
      </div>
    );
  }
}

export default RenderPlayer1Name;