import React, { useState, useEffect } from 'react';
import PlayersName from './PlayersName';
import PlayerCountry from './PlayerCountry';
import ScoreUpdater from './ScoreUpdater';

function BackendLayout(props) {
  const [countriesData, updateCountriesData] = useState([{}])

  const getAllCountries = async (url) => {
    let response = await url
    return await response
  }

  useEffect(() => {
    getAllCountries(props.url).then(res => {
      updateCountriesData(res.data)
    }).catch(error => console.error(error))
  }, []);

  return (
    <form className={props.player.toLowerCase()}>
      <PlayersName mode={props.mode} player={props.player} />
      <ScoreUpdater mode={props.mode} player={props.player} score={0} />
      <PlayerCountry mode={props.mode} player={props.player} countriesData={countriesData} />
    </form>
  )
}

export default BackendLayout;