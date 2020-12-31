import React, { Component } from 'react';
import io from "socket.io-client";

class RenderRoundCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roundText: '',
      roundTextValue: '',
      mode: props.mode
    };
  }

  componentDidMount = () => {
    const socket = io.connect(this.state.mode);
    socket.on("roundCallText", (roundCallPackage) => {
      this.setState({
        roundText: roundCallPackage.roundText,
        roundTextValue: roundCallPackage.roundTextValue
      })
    })
  }
  render() {
    const { roundText } = this.state
    return (
      <>
        <h3>{roundText}</h3>
      </>
    )
  }
}
export default RenderRoundCall;