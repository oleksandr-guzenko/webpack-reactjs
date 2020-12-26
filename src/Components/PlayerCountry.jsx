import React from 'react';

function FilterOfCountries(countries) {
  let dataFromCountries = countries.sort((a, b) => a.name.localeCompare(b.name, 'sv')).map((item, key) => <option key={key} value={item.alpha2Code}>{item.name}</option>);
  return dataFromCountries;
}

function submitCountry(e) {
  console.log(e.target.value)
}

function PlayerCountry(props) {

  return (
    <select className="form-select" onChange={submitCountry}>
      <option value={props.player}>Please select country</option>
      { FilterOfCountries(props.countriesData) }
    </select>

  );
}

export default PlayerCountry;