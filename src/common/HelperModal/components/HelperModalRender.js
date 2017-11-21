import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// Modals
// TODO: Filter through list of modals rather than individ
import Modal_1 from "./modals/Modal_1.js"
import Modal_2 from "./modals/Modal_2.js"
import Modal_3 from "./modals/Modal_3.js"
import Modal_4 from "./modals/Modal_4.js"
import Modal_5 from "./modals/Modal_5.js"

const _modals = [ <Modal_1 />, <Modal_2 />, <Modal_3 />, <Modal_4 />, <Modal_5 /> ]

const HelperModalRender = (props) => (

  <div id="tools-tip" className= {props.active ? "absmid active" : "absmid"} >

  <div id="close"><p>X</p></div>

  <div class="tool-slides active slideshow" data-slide-tip-val="0">

      <ul>
        {_modals[props.currentSlide]}
      </ul>

      <div
        onClick={props.prevModal}
        className="btn dec"
      ></div>

      <div
        onClick={props.nxtModal}
        className="btn inc"
      ></div>

  </div>

  {/*
  <div class="tool-slides" data-slide-tip-val="1">
      <h2>Here's what I do</h2>
      <ul>
          <li class="tool min block" data-block-val="1">
              <div><img src="images/Lvl-2.png"/></div>
              <h2>Illustrate</h2>
          </li><li class="tool min block" data-block-val="3">
              <div><img src="images/Lvl-1.png"/></div>
              <h2>Animate</h2>
          </li><li class="tool min block" data-block-val="4">
              <div><img src="images/Lvl-boss.png"/></div>
              <h2>Game Dev</h2>
          </li><li class="tool min block" data-block-val="2">
              <div><img src="images/Lvl-3.png"/></div>
              <h2>Web Dev</h2>
          </li>
      </ul>
  </div>

  <div class="tool-slides" data-slide-tip-val="2">
      <h2>I am Addicted to Creativity</h2>
  </div>

  <div class="tool-slides" data-slide-tip-val="3">
      <h2>Heres some tools I use</h2>
      <ul>
          <li class="tool min" id="creative-cloud-min" data-tool-val="3">
              <div><img src="images/Lvl-boss.png"/></div>
              <h2>Adobe CC</h2>
          </li><li class="tool min" id="maya-min" data-tool-val="1">
              <div><img src="images/Lvl-2.png"/></div>
              <h2>Maya</h2>
          </li><li class="tool min" id="unity-min" data-tool-val="4">
              <div><img src="images/Lvl-3.png"/></div>
              <h2>Unity</h2>
          </li><li class="tool min" id="github-min" data-tool-val="2">
              <div><img src="images/Lvl-3.png"/></div>
              <h2>Github</h2>
          </li>
      </ul>
  </div>

  <div class="tool-slides" data-slide-tip-val="4">
      <h2>Heres some languages I know</h2>
      <ul>
          <li class="lang tool min" id="creative-cloud-min" data-lang-val="3">
              <div><img src="images/Lvl-boss.png"/></div>
              <h2>HTML/CSS</h2>
          </li><li class="lang tool min" id="maya-min" data-lang-val="1">
              <div><img src="images/Lvl-boss.png"/></div>
              <h2>Javascript</h2>
          </li><li class="lang tool min" id="unity-min" data-lang-val="4">
              <div><img src="images/Lvl-2.png"/></div>
              <h2>PHP</h2>
          </li><li class="lang tool min" id="github-min" data-lang-val="2">
              <div><img src="images/Lvl-3.png"/></div>
              <h2>C#</h2>
          </li>
      </ul>
  </div>*/}

</div>

)

export default HelperModalRender;
