import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
function RenderPlayer2Name(props) {
  const
    [player1, updatePlayer1] = useState(''),
    [player2, updatePlayer2] = useState(''),
    [swapPlace, updateSwapPlace] = useState(true),
    socket = io.connect(props.mode);

  const renderNameOfPlayer = (p1, p2) => {
    if (swapPlace) {
      if (p2 === "" || p2 === "empty") {
        return <h3>team | player2</h3>
      }
      return (
        <h3>
          {p2}
        </h3>
      )
    }
    else if (swapPlace === false) {
      if (p1 === "" || p1 === "empty") {
        return <h3>team | player1</h3>
      }

      return (
        <h3>
          {p1}
        </h3>
      )
    }
  }

  useEffect(() => {
    socket.on("swap-place", (swap) => {
      updateSwapPlace(swap)
    })
    socket.on("player2name", (playerName) => {
      updatePlayer2(playerName);
    })
    socket.on("player1name", (playerName) => {
      updatePlayer1(playerName)
    })
  }, []);


  return (
    <div className="P2-name">
      {renderNameOfPlayer(player1, player2)}
    </div>
  );
}

export default RenderPlayer2Name;