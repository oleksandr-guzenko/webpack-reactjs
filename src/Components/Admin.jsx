import React from 'react';
import Axios from 'axios';
import BackendLayout from './BackendLayout';
import RoundCaller from './RoundCall';
import SwapButton from './SwapPlace';

function Admin(props) {
  const url = 'https://restcountries.eu/rest/v2/all?codes'; //get all flags from the this globe we call earth!
  return (
    <>
      <div className="player-1-wrapper">
        <BackendLayout mode={props.mode} url={Axios.get(url)} player="Player-1" />
      </div>
      <div className="player-2-wrapper">
        <BackendLayout mode={props.mode} url={Axios.get(url)} player="Player-2" />
      </div>
      <RoundCaller mode={props.mode} />
      <SwapButton mode={props.mode} />
    </>
  );
}

export default Admin;