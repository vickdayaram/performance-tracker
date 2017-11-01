import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { default as thunk } from "redux-thunk";
import promise from 'redux-promise';
import logger from 'redux-logger';
import reducers from './reducers/CombineReducers'
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
    reducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
  < Provider store={store} >
      <App />
  </Provider >,
  document.getElementById('root'));

registerServiceWorker();
