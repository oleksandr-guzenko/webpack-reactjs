import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

function RenderRoundCall(props) {
  const
    [roundText, updateRoundText] = useState(''),
    socket = io.connect(props.mode);

  useEffect(() => {
    socket.on("roundCallText", ({roundText}) => {
      updateRoundText(roundText)
    })
  }, []);
  
  return (
    <>
      <h3>{roundText}</h3>
    </>
  )
}

export default RenderRoundCall;