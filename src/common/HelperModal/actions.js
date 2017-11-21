import * as types from './actionTypes';


export function activateHelper(){
  return {
      type: types.ACTIVATE_HELPER,
      payload: true
  };
}

export function deactivateHelper(){
  return {
      type: types.DEACTIVATE_HELPER,
      payload: false
  };
}

export function updateCurrSlide( updatedSlideIndx ){
  return {
      type: types.UPDATE_HELPER_SLIDE,
      payload: updatedSlideIndx
  };
}
