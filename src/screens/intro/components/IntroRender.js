import React from 'react';
import { Link } from 'react-router-dom'

const IntroRender = (props) => (

    <div>
      <Link to="/play"><h2>click to start! { props.introEnd } </h2></Link>
    </div>

);

export default IntroRender;
