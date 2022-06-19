import React, { Component } from "react";

export class Component extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default Component;
