import React from 'react';
import { Switch, Route } from 'react-router-dom'

import MainMenu from '../../mainMenu/components/MainMenu.js'
import Intro from '../../intro/components/IntroContainer.js'

const Home = () => (

  <div id="intro-viewport" >

    <div id="intro">

      <Switch>
        <Route exact path='/' component={MainMenu}/>
        <Route path='/intro' component={Intro}/>
      </Switch>

    </div>

  </div>

)

export default Home;
