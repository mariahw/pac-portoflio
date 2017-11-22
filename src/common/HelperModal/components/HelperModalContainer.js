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

  constructor(props) {
    super(props);

    this.prevModal = this.prevModal.bind(this)
    this.nxtModal = this.nxtModal.bind(this)

  }

  componentDidMount() {
    console.log("MODAL LOG", this)
  }

  prevModal(){
    var currentSlide = this.props.currentSlide
    if (currentSlide > 0)
      this.props.actions.updateCurrSlide(currentSlide-=1)
  }

  nxtModal(){
    var currentSlide = this.props.currentSlide
    if (currentSlide < 4)
      this.props.actions.updateCurrSlide(currentSlide+=1)
  }

  render() {
    return (
      <HelperModalRender
        active = {this.props.active}
        currentSlide = {this.props.currentSlide}
        prevModal = {this.prevModal}
        nxtModal = {this.nxtModal}
      />
    )
  }

}

function mapStateToProps(state){
  return {
    currentSlide: state.helperModal.currentSlide,
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
