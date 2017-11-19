import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Home from '../../home/components/Home.js'
import GameBoard from '../../gameBoard/components/GameBoard.js'

const IntroRender =  ({}) => {

  return (

    <div>
      <Link to="/play"><h2>click to start!</h2></Link>
    </div>

  )

}

export default IntroRender;
