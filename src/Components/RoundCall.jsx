import React, { Component } from 'react';
import io from "socket.io-client";

class RoundText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
      roundText: '',
      roundTextValue: false
    };
  }

  componentDidMount = () => {
    this.launchRoundText();
  }

  launchRoundText = () => {
    const socket = io.connect(this.state.mode);
    const IOPackage = {
      roundTextValue: this.state.roundTextValue,
      roundText: this.state.roundText
    }
    socket.emit('roundText', IOPackage)
  }

  changeRoundTextHandler = (e) => {
    const socket = io.connect(this.state.mode);
    if (e.target.value === '') {
      this.setState({
        roundTextValue: false,
        roundText: ''
      }, () => {
        const IOPackage = {
          roundTextValue: this.state.roundTextValue,
          roundText: this.state.roundText
        }
        socket.emit('roundText', IOPackage)
      })
    }
    else {
      this.setState({
        roundTextValue: true,
        roundText: e.target.value
      }, () => {

        const IOPackage = {
          roundTextValue: this.state.roundTextValue,
          roundText: this.state.roundText
        }
        socket.emit('roundText', IOPackage)

      })
    }

  }

  render() {
    return (
      <div className="round-text">
        <label htmlFor="roundText">Round Text: </label>
        <input id="roundText" type="text" value={this.state.roundText} onChange={this.changeRoundTextHandler} placeholder="Ex: Losers Final" />
      </div>
    );
  }
}

export default RoundText;