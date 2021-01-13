import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
function ScoreUpdater(props) {

  const
    socket = io.connect(props.mode),
    [disablePlus, updateDisablePlus] = useState(false),
    [disableMinus, updateDisableMinus] = useState(true),
    [scoreP1, updateScoreP1] = useState(0),
    [scoreP2, updateScoreP2] = useState(0),
    [path] = useState(window.location.pathname),
    player = props.player;

  let score;
  if (path === '/admin/panel/ft5') {
    score = 5;
  }
  else if (path === '/admin/panel/ft10') {
    score = 10;
  }
  else {
    score = 3;
  }

  const ChangeValue = (e) => {
    setTimeout(() => {
      if (player === 'Player-1') {
        if (scoreP1 >= score) {
          updateDisablePlus(true);
          updateDisableMinus(false);
        }
        else if (scoreP1 < 2 && scoreP1 > 0) {
          updateDisableMinus(false);
        }

        if (scoreP1 <= 0) {
          updateDisablePlus(false);
          updateDisableMinus(true);
        }

        socket.emit('playerScore', { player, scoreP1 })
      }
      if (player === 'Player-2') {
        if (scoreP2 >= score) {
          updateDisablePlus(true);
          updateDisableMinus(false);
        }
        else if (scoreP2 < 2 && scoreP2 > 0) {
          updateDisableMinus(false);
        }

        if (scoreP2 <= 0) {
          updateDisablePlus(false);
          updateDisableMinus(true);
        }

        socket.emit('playerScore', { player, scoreP2 })
      }
    }, 10)
  }

  useEffect(() => {
  }, [ChangeValue()]);

  return (
    <div className={`scorehandler-wrapper ${props.player}`}>
      {props.player === 'Player-1' && <input type="number" min={0} max={3} value={scoreP1} onChange={ChangeValue} />}
      {props.player === 'Player-2' && <input type="number" min={0} max={3} value={scoreP2} onChange={ChangeValue} />}
      {props.player === 'Player-1' &&
        <div className="quantity-nav">
          <button type="button" className={`quantity-button quantity-up ${disablePlus ? 'btn-disabled' : ''}`} disabled={disablePlus} value="+" onClick={() => updateScoreP1(scoreP1 + 1)}>+</button>
          <button type="button" className={`quantity-button quantity-down ${disableMinus ? 'btn-disabled' : ''}`} disabled={disableMinus} value="-" onClick={() => updateScoreP1(scoreP1 - 1)}>-</button>
        </div>
      }
      {props.player === 'Player-2' &&
        <div className="quantity-nav">
          <button type="button" className={`quantity-button quantity-up ${disablePlus ? 'btn-disabled' : ''}`} disabled={disablePlus} value="+" onClick={() => updateScoreP2(scoreP2 + 1)}>+</button>
          <button type="button" className={`quantity-button quantity-down ${disableMinus ? 'btn-disabled' : ''}`} disabled={disableMinus} value="-" onClick={() => updateScoreP2(scoreP2 - 1)}>-</button>
        </div>
      }
    </div>
  );
}

export default ScoreUpdater;