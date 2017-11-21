import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import {Provider} from 'react-redux'
import allReducers from './reducers/reducers'
import {createStore} from 'redux';
const store = createStore(allReducers);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
