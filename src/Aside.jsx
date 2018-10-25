import React, { Component } from 'react';

class Aside extends Component {
  render () {
    return (<p>{this.props.lang}</p>)
  }
}

export default Aside;