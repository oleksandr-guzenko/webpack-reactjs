import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

function RoundCall(props) {
  const
    [roundText, updateRoundText] = useState(''), 
    [roundTextBoolean, updateRoundTextBoolean] = useState(false),
    socket = io.connect(props.mode);

  const launchRoundText = () => {
    socket.emit('roundText', {roundText, roundTextBoolean})
  }
  
  const changeRoundTextHandler = (e) => {
    if (e.target.value === '') {
      updateRoundText('');
      updateRoundTextBoolean(false)
    }
    else {
      updateRoundText(e.target.value);
      updateRoundTextBoolean(true)
    }
  }

  useEffect(() => {
    launchRoundText()
  }, [roundText]);

  return (
    <div className="round-text">
      <label htmlFor="roundText">Round Text: </label>
      <input id="roundText" type="text" value={roundText} onChange={changeRoundTextHandler} placeholder="Ex: Losers Final" />
    </div>
  );
}

export default RoundCall;