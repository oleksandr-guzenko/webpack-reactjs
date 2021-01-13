import React, { useState, useEffect } from 'react';
import io from "socket.io-client";

function RenderPlayer2Score(props) {

  const
    socket = io.connect(props.mode),
    [swapPlace, updateSwapPlace] = useState(true),
    [p1Score, updateScoreP1] = useState(0),
    [p2Score, updateScoreP2] = useState(0);

  useEffect(() => {
    socket.on("swap-place", (swap) => {
      updateSwapPlace(swap)
    })

    socket.on("player2Score", (scoreP2) => {
      updateScoreP2(scoreP2)
    })

    socket.on("player1Score", (scoreP1) => {
      updateScoreP1(scoreP1)
    })

  }, []);


  const RenderScoreOfPlayer = (playersScore) => {
    if (swapPlace) {
      if (playersScore[1] === '') {
        return <h3>0</h3>
      }
      return <h3>{playersScore[1]}</h3>
    }
    else if (swapPlace === false) {
      if (playersScore[0] === '') {
        return <h3>0</h3>
      }
      return <h3>{playersScore[0]}</h3>
    }
  }

  return (
    <div className="P2-score">
      {RenderScoreOfPlayer([p1Score, p2Score])}
    </div>
  );
}

export default RenderPlayer2Score;