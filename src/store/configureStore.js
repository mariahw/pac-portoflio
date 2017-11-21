import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { setStore } from './store';


export default (initialState) => {

  const store = createStore(
    rootReducer,
    initialState
  );

  setStore(store);

  return store;
};
