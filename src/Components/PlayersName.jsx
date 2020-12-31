import React from 'react';
import io from "socket.io-client";

function PlayersName(props) {
  return (
    <>
      <label htmlFor={props.player} >
        {props.player}: 
        <input type="text" id={props.player} name={props.player} placeholder={`Team | ${props.player} name`} onChange={NameChangeHandler([props.player.toLowerCase(), props.mode], this)} />
      </label>
    </>
  );
}

const NameChangeHandler = (args) => (e) => {
  // logic with args, event

  const socket = io.connect(args[1]);
  if (args[0] === 'player-1') {

    const IOpackage = {
      playerID: args[0],
      name: e.target.value
    }
    socket.emit('player', IOpackage)
  }

  else {
    const IOpackage = {
      playerID: args[0],
      name: e.target.value
    }
    socket.emit('player', IOpackage)
  }

}

export default PlayersName;