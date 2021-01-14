import React from 'react';
import io from "socket.io-client";

function PlayerCountry(props) {
  const socket = io.connect(props.mode);

  const FilterOfCountries = (countries) => {
    let dataFromCountries = countries.sort((a, b) => a.name.localeCompare(b.name, 'sv')).map((item, key) => <option key={key} value={item.alpha2Code}>{item.name}</option>);
    return dataFromCountries;
  }

  const CountryChangeHandler = (e) => {
    // logic with args, event


    if (props.player === 'Player-1') {

      const IOpackage = {
        playerID: props.player,
        country: e.target.value
      }
      socket.emit('player-country', IOpackage)
    }

    else {
      const IOpackage = {
        playerID: props.player,
        country: e.target.value
      }
      socket.emit('player-country', IOpackage)
    }

  }
  
  return (
    <select className="form-select" onChange={CountryChangeHandler}>
      <option value={props.player}>Please select country</option>
      { FilterOfCountries(props.countriesData)}
    </select>
  );
}



export default PlayerCountry;