import React, { Component } from 'react';
import PlayersName from './PlayersName';
import PlayerCountry from './PlayerCountry';
import ScoreUpdater from './ScoreUpdater';

const env = process.env.NODE_ENV;

let mode;
if (env === 'development') {
  mode = "localhost:5100";
}
else {
  mode = `https://xbox-socket-io.herokuapp.com/`;
}

class BackendLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      url: this.props.url,
      countriesData: [{}],
      player: this.props.player
    }
  }

  getAllCountries = async (url) => {
    let response = await url
    return await response
  }

  componentDidMount() {
    this.getAllCountries(this.state.url).then(res => {
      this.setState({
        countriesData: res.data
      })
    }).catch(issues => {
      console.error(issues)
    })
  }

  render() {
    const { player, countriesData } = this.state
    if (player === 'Player-1')
      return (
        <form className={player.toLowerCase()}>
          <PlayersName mode={mode} player={player} />
          <ScoreUpdater mode={mode} player={player} score={0} />
          <PlayerCountry mode={mode} countriesData={countriesData} />
        </form>
      );
    else {
      return (
        <form className={player.toLowerCase()}>
          <PlayersName mode={mode} player={player} />
          <ScoreUpdater mode={mode} player={player} score={0} />
          <PlayerCountry mode={mode} player={player} countriesData={countriesData} />
        </form>
      );
    }
  }
}

export default BackendLayout;