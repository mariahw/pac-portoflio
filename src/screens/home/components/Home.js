import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import GameBoard from '../../gameBoard/components/GameBoard.js'
import Intro from '../../intro/components/IntroRender.js'

// import '../../../common/Styles/main.css';

const Home = () => (

  <div id="main-menu">

      <div id="menu-wrapper" class="dotted absmid">

          <div id="header-logo"></div>

          <ul id="int-main-menu">
              <li class="btn" id="lvl-1-start">
                  <Link to="/intro"><h3>Play</h3></Link>
              </li>
              <li class="btn" id="contact">
                  <a href="mailto:mariahweathersby@gmail.com"><h3>Contact</h3></a>
              </li>
              <li class="btn" id="resume">
                  <a href="MariahWeathersby-Resume.pdf" download><h3>Resume</h3></a>
              </li>
          </ul>

          <div id="credits">
              <p>Est Nov-1990</p>
              <p> Pasadena, CALIFORNIA</p>
              <p>mariahweathersby@gmail.com</p>
          </div>

      </div>

  </div>

)

export default Home;
