import React from 'react';
import io from "socket.io-client";

function PlayersName(props) {
  const socket = io.connect(props.mode);
  const NameChangeHandler = (e) => {
    // logic with args, event

    if (props.player === 'Player-1') {

      const IOpackage = {
        playerID: props.player,
        name: e.target.value
      }
      socket.emit('player', IOpackage)
    }

    else {
      const IOpackage = {
        playerID: props.player,
        name: e.target.value
      }
      socket.emit('player', IOpackage)
    }
  }

  return (
    <>
      <label htmlFor={props.player} >
        {props.player}:
        <input type="text" id={props.player} name={props.player} placeholder={`Team | ${props.player} name`} onChange={NameChangeHandler} />
      </label>
    </>
  );

}

export default PlayersName;