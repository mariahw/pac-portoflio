import React, { Component } from 'react';
import GameBoardRender from './GameBoardRender.js'

class GameBoardContainer extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    console.log("GAME PLAY")
  }

  render() {
    return (
      <GameBoardRender />
    )
  }
}

export default GameBoardContainer;
