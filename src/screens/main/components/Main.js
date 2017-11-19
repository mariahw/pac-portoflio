import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../home/components/Home.js'
import GameBoard from '../../gameBoard/components/GameBoard.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/play' component={GameBoard}/>
    </Switch>

  </main>
)

export default Main;
