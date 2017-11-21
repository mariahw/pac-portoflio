import React from 'react';
import { Switch, Route, IndexRedirect } from 'react-router-dom'

import App from '../../../App.js'
import Home from '../../home/components/Home.js'
import Intro from '../../intro/components/IntroContainer'
import Helper from '../../../common/HelperModal/components/HelperModalContainer.js'
import MainMenu from '../../mainMenu/components/MainMenu.js'
import GameBoard from '../../gameBoard/components/GameBoardContainer.js'

const Main = () => (

  <div id="game-container" class="full lock">
      <span id="desk-container" class="active">

        <Helper />

        <Switch>
          <Route path="/home" component={MainMenu}/>
          <Route path='/intro' component={Intro}/>
          <Route path='/play' component={GameBoard}/>
        </Switch>

      </span>
  </div>

)

export default Main;
