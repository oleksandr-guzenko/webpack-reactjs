import React, { useState } from 'react';
import io from "socket.io-client";
function ScoreUpdater(props) {

  const
    socket = io.connect(props.mode),
    [disablePlus, updateDisablePlus] = useState(false),
    [disableMinus, updateDisableMinus] = useState(true),
    [P1Score, updateScoreP1] = useState(0),
    [P2Score, updateScoreP2] = useState(0),
    [path] = useState(window.location.pathname),
    player = props.player;

  let score;
  if (path === '/dashboard/ft5') {
    score = 5;
  }
  else if (path === '/dashboard/ft10') {
    score = 10;
  }
  else {
    score = 3;
  }

  const sendScoreIncrement = (e) => {
    if (player === 'Player-1') {
      if (e.target.value === '+') {
        let scoreP1 = P1Score + 1;
        if (scoreP1 >= score) {
          updateDisablePlus(true);
          updateDisableMinus(false);
        }
        else if (scoreP1 < 2 && scoreP1 > 0) {
          updateDisableMinus(false);
        }

        updateScoreP1(scoreP1)
        socket.emit('playerScore', { player, scoreP1 })
      }
    }

    if (player === 'Player-2') {
      if (e.target.value === '+') {
        let scoreP2 = P2Score + 1;
        if (scoreP2 >= score) {
          updateDisablePlus(true);
          updateDisableMinus(false);
        }
        else if (scoreP2 < 2 && scoreP2 > 0) {
          updateDisableMinus(false);
        }

        updateScoreP2(scoreP2)
        socket.emit('playerScore', { player, scoreP2 })
      }
    }
  }

  const sendScoreDecrement = (e) => {
    if (player === 'Player-1') {
      if (e.target.value === '-') {
        let scoreP1 = P1Score - 1;
        if (scoreP1 < 2 && scoreP1 > 0) {
          updateDisableMinus(false);
        }

        else if (scoreP1 <= 0) {
          updateDisablePlus(false);
          updateDisableMinus(true);
        }
        
        updateScoreP1(scoreP1)
        socket.emit('playerScore', { player, scoreP1 })
      }
    }

    if (player === 'Player-2') {
      if (e.target.value === '-') {
        let scoreP2 = P2Score - 1;
        if (scoreP2 < 2 && scoreP2 > 0) {
          updateDisableMinus(false);
        }

        else if (scoreP2 <= 0) {
          updateDisablePlus(false);
          updateDisableMinus(true);
        }
        
        updateScoreP2(scoreP2)
        socket.emit('playerScore', { player, scoreP2 })
      }
    }
  }

  return (
    <div className={`scorehandler-wrapper ${props.player}`}>
      {props.player === 'Player-1' && <input type="number" value={P1Score} readOnly />}
      {props.player === 'Player-2' && <input type="number" value={P2Score} readOnly />}
      {props.player === 'Player-1' &&
        <div className="quantity-nav">
          <button type="button" className={`quantity-button quantity-up ${disablePlus ? 'btn-disabled' : ''}`} disabled={disablePlus} value="+" onClick={sendScoreIncrement}>+</button>
          <button type="button" className={`quantity-button quantity-down ${disableMinus ? 'btn-disabled' : ''}`} disabled={disableMinus} value="-" onClick={sendScoreDecrement}>-</button>
        </div>
      }
      {props.player === 'Player-2' &&
        <div className="quantity-nav">
          <button type="button" className={`quantity-button quantity-up ${disablePlus ? 'btn-disabled' : ''}`} disabled={disablePlus} value="+" onClick={sendScoreIncrement}>+</button>
          <button type="button" className={`quantity-button quantity-down ${disableMinus ? 'btn-disabled' : ''}`} disabled={disableMinus} value="-" onClick={sendScoreDecrement}>-</button>
        </div>
      }
    </div>
  );
}

export default ScoreUpdater;