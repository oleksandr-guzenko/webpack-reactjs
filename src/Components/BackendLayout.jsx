import React, { Component } from 'react';
import PlayersName from './PlayersName';
import PlayerCountry from './PlayerCountry';
import ScoreUpdater from './ScoreUpdater';

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
          <PlayersName mode={this.props.mode} player={player} />
          <ScoreUpdater mode={this.props.mode} player={player} score={0} />
          <PlayerCountry mode={this.props.mode} player={player} countriesData={countriesData} />
        </form>
      );
    else {
      return (
        <form className={player.toLowerCase()}>
          <PlayersName mode={this.props.mode} player={player} />
          <ScoreUpdater mode={this.props.mode} player={player} score={0} />
          <PlayerCountry mode={this.props.mode} player={player} countriesData={countriesData} />
        </form>
      );
    }
  }
}

export default BackendLayout;