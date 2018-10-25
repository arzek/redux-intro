import React, { Component } from 'react';
import store from './store';

import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Main from './Main';


ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('main'))