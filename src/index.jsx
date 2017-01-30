import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/ConnectedApp';
import store from './configureStore';
require("../style.css");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
)
