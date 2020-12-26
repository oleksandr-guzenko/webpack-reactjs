import React from 'react';
import Axios from 'axios';
import BackendLayout from './BackendLayout';


function Admin(props) {
  const url = 'https://restcountries.eu/rest/v2/all?codes'; //get all flags from the this globe we call earth!
  return (
    <>
      <div className="player-1-wrapper">
        <BackendLayout url={Axios.get(url)} player="Player-1" />
      </div>
      <div className="player-2-wrapper">
        <BackendLayout url={Axios.get(url)} player="Player-2" />
      </div>
    </>
  );
}

export default Admin;