import React, { Component } from 'react';
import store from './store';

import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { connect } from 'react-redux';

class Lang extends Component {
  render () {
    return (<p>{this.props.curentLang}</p>)
  }
}


const mapStateToProps = state => state;

const Conect = connect(mapStateToProps)(Lang);

ReactDOM.render(
  <Provider store={store}>
    <Conect />
  </Provider>, document.getElementById('lang'))