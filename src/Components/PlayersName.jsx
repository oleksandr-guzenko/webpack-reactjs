import React from 'react';
import io from "socket.io-client";

function PlayersName(props) {
  return (
    <>
      <label htmlFor="name" >
        {props.player}:
        <input type="text" id="name" name="name" placeholder={`Team | ${props.player} name`} onChange={nameChangeHandler([props.player.toLowerCase(), props.mode], this)} />
      </label>
    </>
  );
}

const nameChangeHandler = (args) => (event) => {
  // logic with args, event

  const socket = io.connect(args[1]);
  if (args[0] === 'player-1') {

    const IOpackage = {
      playerID: args[0],
      name: event.target.value
    }
    socket.emit('player', IOpackage)
  }

  else {
    const IOpackage = {
      playerID: args[0],
      name: event.target.value
    }
    socket.emit('player', IOpackage)
  }

}

export default PlayersName;