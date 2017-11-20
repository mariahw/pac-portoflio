import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

const IntroRender = (props) => (

    <div>
      <Link to="/play"><h2>click to start! { props.introEnd } </h2></Link>
      <p>{ props.introEnd }</p>
    </div>

);

export default IntroRender;
