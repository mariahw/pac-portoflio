import React from 'react';

import Helper from '../../../common/HelperModal/components/HelperModalContainer.js'

const GameBoardRender = () => (

  <div id="maze-container" class="full active">
      <div id="pacman" class="down">
      </div>
      <div id="maze-stage" class="full">
          <img id="maze" src="images/mazeFin.svg" />
          <div id="tokens-container" class="full">
              <div id="mini-games-container">
                  <div id="things-do" class="mini-canvas" data-game-val="0">
                      {/*
                      <video id="game-intro-vid">
                        <source src="movie/start.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>
                      */}
                  </div>
                  <div id="addicted-creativity" class="mini-canvas static"  data-game-val="1"></div>
                  <div id="tools-use" class="mini-canvas static"  data-game-val="2"></div>
                  <div id="prog-lang" class="mini-canvas static"  data-game-val="3"></div>
              </div>
          </div>
      </div>
  </div>

)

export default GameBoardRender;
