import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../home/components/Home.js'
import GameBoard from '../../gameBoard/components/GameBoard.js'
import Intro from '../../intro/components/IntroContainer.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/play' component={GameBoard}/>
      <Route path='/intro' component={Intro}/>
    </Switch>

  </main>
)

export default Main;
