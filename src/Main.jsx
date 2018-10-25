import React, { Component } from 'react';

import Aside from './Aside';
import store from './store';

import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);

    this.handleChangeLang = this.handleChangeLang.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  handleChangeLang() {
    const lang = this.refs.lang.value;
    this.props.change(lang);
  }

  render() {

    console.log('rednder');
    return (
      <div>
          <select ref="lang" onChange={this.handleChangeLang}>
            <option value="ALB">ALB</option>
            <option value="ZBW">ZBW</option>
          </select>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}
function mapDispatchToProps (dispatch) {
  return {
    change: (lang) => {
      dispatch({type: 'CHANGE_LANG', payload: lang});
    }
  }
}

// const com = connect(mapStateToProps)(Main);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
