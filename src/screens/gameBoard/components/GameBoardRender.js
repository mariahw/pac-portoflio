import React from 'react';
import Script from 'react-load-script'

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

      {/* Libraries */}
      <Script url="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" />

      <Script url="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js" />
      <Script url="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js" />

      <Script url="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js" />
      <Script url="http://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js?v=0.6.0" />
      <Script url="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/ScrollToPlugin.min.js" />

      <Script url="https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.min.js" />
      <Script url="https://cdnjs.cloudflare.com/ajax/libs/swipe/2.0.0/swipe.min.js" />

      <Script url="http://play.mariahweathersby.com/scripts/script.js" />


      {/* Game Logic */}

  </div>

)

export default GameBoardRender;
