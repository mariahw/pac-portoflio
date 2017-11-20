import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../home/components/Home.js'
import GameBoard from '../../gameBoard/components/GameBoardContainer.js'
import Intro from '../../intro/components/IntroContainer.js'

const Main = () => (

  <div id="game-container" class="full lock">
      <span id="desk-container" class="active">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/play' component={GameBoard}/>
          <Route path='/intro' component={Intro}/>
        </Switch>
      </span>
  </div>

)

export default Main;
