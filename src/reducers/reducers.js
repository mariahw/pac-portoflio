import {combineReducers} from "redux"
import reducer from './rootReducers'

const allReducers = combineReducers({
  test: reducer
});

export default allReducers;
