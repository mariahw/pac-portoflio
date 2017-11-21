import {combineReducers} from "redux"
import reducer from './rootReducers'

import helperModal from '../common/HelperModal';


const allReducers = combineReducers({
  test: reducer,
  helperModal: helperModal.reducer
});

export default allReducers;
