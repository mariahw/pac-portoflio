import React, { Component } from 'react';
import GameBoardRender from "./GameBoardRender.js"

class GameBoardContainer extends Component {

  constructor() {
    super();
    this.state = { introEnd: "false" };
  }

  componentDidMount() {
    console.log("VIDEO PLAY")
  }

  render() {
    return (
      <GameBoardRender />
    )
  }
}

export default GameBoardContainer;
