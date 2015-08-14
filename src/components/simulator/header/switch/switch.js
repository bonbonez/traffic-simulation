// Simple switch that changes the enables/disables traffic

import './switch.styl';

import React        from 'react';
import {connect}    from 'redux/react';
import * as Actions from 'actions/simulator';

@connect(state => ({
  simulator: state.simulator
}))
export default class Switch extends React.Component {
  render() {
    let classNameList = ["switch"];
    if (this.props.simulator.enabled) {
      classNameList.push('m-active');
    }
    return (
      <button className={classNameList.join(' ')} onClick={this.onClick}></button>
    );
  }

  onClick = () => {
    this.props.dispatch(Actions.toggle());
  }
}