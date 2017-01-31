import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/ConnectedApp';
import store from './configureStore';
require('./style.css');

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
)
