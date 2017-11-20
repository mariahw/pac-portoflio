import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../home/components/Home.js'
import GameBoard from '../../gameBoard/components/GameBoardContainer.js'
import Intro from '../../intro/components/IntroContainer.js'

const Main = () => (

  <div id="game-container" class="full lock">
      <span id="desk-container" class="active">
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/play' component={GameBoard}/>
        </Switch>
      </span>
  </div>

)

export default Main;
