import {combineReducers} from "redux"
// import reducer from './rootReducers'

import helperModal from '../common/HelperModal';

const allReducers = combineReducers({
  helperModal: helperModal.reducer
});

export default allReducers;
