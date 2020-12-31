import React, { Component } from 'react';
import io from "socket.io-client";

class SwapButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: this.props.mode,
      replace: false
    };
  }

  swapPlace = (e) => {
    if (e.target.value === 'false') {
      this.setState({
        replace: true
      })
    }

    else if (e.target.value === 'true') {
      this.setState({
        replace: false
      })
    }

    const { replace, mode } = this.state;
    const socket = io.connect(mode);
    socket.emit('swap-place', replace)
  }
  render() {
    return (
      <button type="button" className="btn swap" value={this.state.replace} onChange={this.swapPlace} onClick={this.swapPlace}>Swap</button>
    );
  }
}

export default SwapButton;