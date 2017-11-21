import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
// import * as actions from  '../actions'
import * as helperActions from  '../../../common/HelperModal/actions'


import IntroRender from './IntroRender.js'

class IntroContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { introEnd: false };

    this.onIntroEnd = this.onIntroEnd.bind(this)
    this.onLetsPlay = this.onLetsPlay.bind(this)
    this.activateHelper = this.activateHelper.bind(this)
  }

  componentDidMount() {
    console.log("INTRO LOG", this)
  }

  onIntroEnd() {
    this.setState( { introEnd: true } )
  }

  activateHelper(){
    this.props.actions.activateHelper()
    console.log(this)
  }

  onLetsPlay() {
    this.props.actions.activateHelper()
  }

  render() {
    return (
      <IntroRender
        introEnd = { this.onIntroEnd }
        introState = { this.state.introEnd }
        onLetsPlay = {this.state.onLetsPlay}
        activateHelper = {this.activateHelper}
      />
    )
  }
}

// export default IntroContainer;

function mapStateToProps(state){
  return {
    activateHelper: state.helperModal.active
  }
}

const mapDispatchToProps = (dispatch) => {
  const actionsToBind = Object.assign({}, helperActions);
  return {
    actions: bindActionCreators(actionsToBind, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroContainer);
