import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import flag from '../img/flags/default-flag.png';

function RenderPlayer2Country(props) {
  const
    [countryP1, updateCountryP1] = useState(''),
    [countryP2, updateCountryP2] = useState(''),
    [swapPlace, updateSwapPlace] = useState(true),
    [animationFlagP1, updateAnimationFlagP1] = useState(''),
    [animationFlagP2, updateAnimationFlagP2] = useState(''),
    socket = io.connect(props.mode);

  useEffect(() => {
    socket.on("swap-place", (swap) => {
      updateSwapPlace(swap)
    })

    socket.on("player1country", (country) => {
      if (countryP1 != country) {
        updateAnimationFlagP1('')
        setTimeout(() => {
          updateAnimationFlagP1('animation-time-flag-P1')
        }, 250)
      }
      updateCountryP1(country)
    })

    socket.on("player2country", (country) => {
      if (countryP2 != country) {
        updateAnimationFlagP2('')
        setTimeout(() => {
          updateAnimationFlagP2('animation-time-flag-P2')
        }, 250)
      }
      updateCountryP2(country)
    })
  }, []);


  const renderCountryOfPlayer = (cP1, cP2) => {
    if (swapPlace) {
      if (cP2 === '' || cP2 === 'Player-2' || cP2 === undefined) {
        return <img src={`${flag}`} alt="flag" />
      }
      return (
        <img className={`img-p2 ${animationFlagP2}`} src={`${cP2}`} alt="Country flag P2" />
      )
    }
    else if (swapPlace === false) {
      if (cP1 === '' || cP1 === 'Player-1' || cP1 === undefined) {
        return <img className="swaped" src={`${flag}`} alt="flag" />
      }
      return (
        <img className={`img-p1 swapped ${animationFlagP1}`}src={`${cP1}`} alt="Country flag P1" />
      )
    }
  }

  return (
    <div className="P2-country">
      {/* <div className="shape hex"> */}
      {renderCountryOfPlayer(countryP1, countryP2)}
      {/* </div> */}
    </div>
  );
}

export default RenderPlayer2Country;