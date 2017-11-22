import * as types from './actionTypes';
import * as constants from './constants';

const initialState = {
  currentSlide: 0,
  active: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case types.ACTIVATE_HELPER:
      return Object.assign({}, state, { active: action.payload });
      break;

    case types.DEACTIVATE_HELPER:
      return Object.assign({}, state, { active: action.payload })
      break;

    case types.UPDATE_HELPER_SLIDE:
      console.log("UPDATE_HELPER_SLIDE", action.payload, )

      return Object.assign({}, state, { currentSlide: action.payload })
      break;

    default:
      return state;
  }
}
