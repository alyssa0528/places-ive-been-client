import React, { Component } from 'react';

class Like extends Component {
  state = {
    counter: 0
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Like! {this.state.counter}</button>
      </div>
    )
  }
}

export default Like;
