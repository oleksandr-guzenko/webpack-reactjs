import React, { Component } from 'react';
import io from "socket.io-client";
import RenderRoundCall from '../Components/RenderRoundCall';

import RenderPlayer1Name from '../Components/RenderPlayer1Name';
import RenderPlayer2Name from '../Components/RenderPlayer2Name';

import RenderPlayer1Country from '../Components/RenderPlayer1Country';
import RenderPlayer2Country from '../Components/RenderPlayer2Country';

import RenderPlayer1Score from '../Components/RenderPlayer1Score';
import RenderPlayer2Score from '../Components/RenderPlayer2Score';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
      roundTextValue: false
    };
  }

  componentDidMount() {
    const socket = io.connect(this.state.mode);
    socket.on("roundCallText", (roundCallPackage) => {
      this.setState({
        roundTextValue: roundCallPackage.roundTextValue
      })
    })
  }
  render() {
    const { mode } = this.state;
    return (
      <div className="layout">
        <div className="Player-1">
          <RenderPlayer1Country mode={mode} />
          <RenderPlayer1Name mode={mode} />
          <RenderPlayer1Score mode={mode} />
        </div>
        {this.state.roundTextValue &&
          <div className="Rounds">
            <RenderRoundCall mode={this.state.mode} />
          </div>
        }
        <div className="Player-2">
          <RenderPlayer2Score mode={mode} />
          <RenderPlayer2Name mode={mode} />
          <RenderPlayer2Country mode={mode} />
        </div>
      </div>
    );
  }
}


export default Home;