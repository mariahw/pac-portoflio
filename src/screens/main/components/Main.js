import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../home/components/Home.js'
import Helper from '../../../common/HelperModal/components/HelperModalContainer.js'
import MainMenu from '../../mainMenu/components/MainMenu.js'
import GameBoard from '../../gameBoard/components/GameBoardContainer.js'

const Main = () => (

  <div id="game-container" class="full lock">
      <span id="desk-container" class="active">

        <Helper />
        <Switch>
          {/* <Route path='/home' component={Home}/> */}
          <Route path='/home' component={Home}/>
          <Route path='/play' component={GameBoard}/>
        </Switch>
        
      </span>
  </div>

)

export default Main;
