import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import IntroRender from './IntroRender.js'

class IntroContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Mariaah'
    };
  }

  render() {
    return (
      <IntroRender />
    )
  }
}

export default Intro;
