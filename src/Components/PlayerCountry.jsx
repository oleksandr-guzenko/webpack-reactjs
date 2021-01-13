import React from 'react';
import io from "socket.io-client";

function PlayerCountry(props) {

  return (
    <select className="form-select" onChange={CountryChangeHandler([props.player, props.mode], this)}>
      <option value={props.player}>Please select country</option>
      { FilterOfCountries(props.countriesData)}
    </select>
  );
}


const FilterOfCountries = (countries) => {
  let dataFromCountries = countries.sort((a, b) => a.name.localeCompare(b.name, 'sv')).map((item, key) => <option key={key} value={item.alpha2Code}>{item.name}</option>);
  return dataFromCountries;
}

const CountryChangeHandler = (args) => (e) => {
  // logic with args, event

  const socket = io.connect(args[1]);
  if (args[0] === 'Player-1') {

    const IOpackage = {
      playerID: args[0],
      country: e.target.value
    }
    socket.emit('player-country', IOpackage)
  }

  else {
    const IOpackage = {
      playerID: args[0],
      country: e.target.value
    }
    socket.emit('player-country', IOpackage)
  }

}

export default PlayerCountry;