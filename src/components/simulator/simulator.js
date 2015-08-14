import React                 from 'react';
import {connect}             from 'redux/react';

import Header                from './header/header';
import Scene                 from './scene/scene';

import * as ActionsCreators  from 'actions/simulator';
import * as TrafficStateLoop from 'lib/traffic-state-loop';
import * as Consts           from 'constants/simulator';

import './simulator.styl';

@connect(state => ({
  simulator: state.simulator
}))
export default class Simulator extends React.Component {
  componentWillMount() {

    TrafficStateLoop.registerState([
      {
        state:    Consts.TRAFFIC_STATE_GREEN,
        to:       Consts.TRAFFIC_STATE_ORANGE,
        duration: 5000,
        callback: () => {
          this.props.dispatch(ActionsCreators.setTrafficStateGreen());
        }
      },
      {
        state:    Consts.TRAFFIC_STATE_ORANGE,
        to:       Consts.TRAFFIC_STATE_RED,
        duration: 1000,
        callback: () => {
          this.props.dispatch(ActionsCreators.setTrafficStateOrange());
        }
      },
      {
        state:    Consts.TRAFFIC_STATE_RED,
        to:       Consts.TRAFFIC_STATE_GREEN,
        duration: 1000,
        callback: () => {
          this.props.dispatch(ActionsCreators.setTrafficStateRed());
          this.props.dispatch(ActionsCreators.toggleActiveLightPair());
        }
      }
    ]);

  }

  componentWillUnmount() {
    TrafficStateLoop.clearStates();
  }

  render() {
    let { enabled } = this.props.simulator;

    enabled ? TrafficStateLoop.start() : TrafficStateLoop.stop();

    return (
      <div className="simulator">
        <Header />
        <Scene />
      </div>
    );
  }
}