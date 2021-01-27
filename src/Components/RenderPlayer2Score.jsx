import React, { useState, useEffect } from 'react';
import io from "socket.io-client";

function RenderPlayer2Score(props) {

  const
    socket = io.connect(props.mode),
    [swapPlace, updateSwapPlace] = useState(true),
    [p1Score, updateScoreP1] = useState(0),
    [p2Score, updateScoreP2] = useState(0),
    [animationScoreP1, updateAnimationScoreP1] = useState(''),
    [animationScoreP2, updateAnimationScoreP2] = useState('');

  useEffect(() => {
    socket.on("swap-place", (swap) => {
      updateSwapPlace(swap)
    })

    socket.on("player1Score", (scoreP1) => {
      if(scoreP1 !== p1Score) {
        updateAnimationScoreP1('')
        setTimeout(() => {
          updateAnimationScoreP1('animation-time-P1')
        }, 250)
      }
      setTimeout(() => {
        updateScoreP1(scoreP1)
      }, 250)
    })

    socket.on("player2Score", (scoreP2) => {
      if(scoreP2 !== p2Score) {
        updateAnimationScoreP2('')
        setTimeout(() => {
          updateAnimationScoreP2('animation-time-P2')
        }, 250)
      }
      setTimeout(() => {
        updateScoreP2(scoreP2)
      }, 250)
      
    })

  }, []);


  const RenderScoreOfPlayer = (p1, p2) => {
    if (swapPlace) {
      if (p2 === '') {
        return <h3>0</h3>
      }
      return <h3 className={animationScoreP2}>{p2}</h3>
    }
    else if (swapPlace === false) {
      if (p1 === '') {
        return <h3>0</h3>
      }
      return <h3 className={animationScoreP1}>{p1}</h3>
    }
  }

  return (
    <div className="P2-score">
      {RenderScoreOfPlayer(p1Score, p2Score)}
    </div>
  );
}

export default RenderPlayer2Score;