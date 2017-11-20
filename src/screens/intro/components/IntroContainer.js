import React, { Component } from 'react';

import IntroRender from './IntroRender.js'

class IntroContainer extends Component {

  constructor() {
    super();
    this.state = { introEnd: "false" };
  }

  componentDidMount() {
    console.log("VIDEO PLAY")
  }

  render() {
    return <IntroRender introEnd = {this.state.introEnd} />
  }
}

export default IntroContainer;
