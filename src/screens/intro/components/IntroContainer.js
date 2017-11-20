import React, { Component } from 'react';

import IntroRender from './IntroRender.js'

class IntroContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { introEnd: false };

    this.onIntroEnd = this.onIntroEnd.bind(this)
  }

  onIntroEnd() {
    this.setState( { introEnd: true } )
  }

  render() {
    return (
      <IntroRender
        introEnd = { this.onIntroEnd }
        introState = { this.state.introEnd }
      />
    )
  }
}

export default IntroContainer;
