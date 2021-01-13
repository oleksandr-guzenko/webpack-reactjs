import React, { useState, useEffect } from 'react';
import io from "socket.io-client";

function SwapPlace(props) {
  const [replace, updateReplace] = useState(false),
  socket = io.connect(props.mode);

  const swapPlace = (e) => {
    if (e.target.value === 'false') {
      updateReplace(true)
    }
    else if (e.target.value === 'true') {
      updateReplace(false)
    }
    socket.emit('swap-place', replace)
  }

  return (
    <button type="button" className="btn swap" value={replace} onChange={swapPlace} onClick={swapPlace}>Swap</button>
  );
}

export default SwapPlace;