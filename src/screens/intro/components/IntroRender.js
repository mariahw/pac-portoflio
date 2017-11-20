import React from 'react';
import { Link } from 'react-router-dom'

import introvid from '../assets/intro.mp4'

const IntroRender = ( props ) => (

  <div id="vidWrapper">

      <video id="introVid" autoPlay muted
        onEnded={ props.introEnd }
      >
        <source src={introvid} type="video/mp4" />
        Your browser does not support the video tag.

      </video>

      { props.introState ?
        <Link to="/play">
          <div className="btn flash"><h3>click to start!</h3></div>
        </Link> : null
      }

  </div>


);

export default IntroRender;
