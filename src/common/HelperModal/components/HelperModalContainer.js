import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import HelperModalRender from './HelperModalRender.js'
import * as actions from  '../actions'



class HelperModalContainer extends Component {

  constructor() {
    super();

    this.prevModal = this.prevModal.bind(this)
    this.nxtModal = this.nxtModal.bind(this)

  }

  componentDidMount() {
    console.log("MODAL LOG", this)
  }

  prevModal(){
    var currentSlide = this.state.currentSlide
    if (currentSlide > 0)
      this.setState({ currentSlide: currentSlide-=1 })
  }

  nxtModal(){
    var currentSlide = this.state.currentSlide
    if (currentSlide < 4)
      this.setState({ currentSlide: currentSlide+=1 })
  }

  render() {
    return (
      <HelperModalRender
        // active = {this.state.slideActive}
        // currentSlide = {this.state.currentSlide}
        // prevModal = {this.prevModal}
        // nxtModal = {this.nxtModal}
      />
    )
  }

}

function mapStateToProps(state){
  return {
    currentSlide: state.helperModal.currentslide,
    active: state.helperModal.active
  }
}

const mapDispatchToProps = (dispatch) => {
  const actionsToBind = Object.assign({}, actions);
  return {
    actions: bindActionCreators(actionsToBind, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelperModalContainer);
