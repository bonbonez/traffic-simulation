// Scene is where everything is happen.
// Here are the lights, united in pairs.
// All components that are nested in Scene
// are not connected to store

import React     from 'react';
import {connect} from 'redux/react';

import LightPair from './objects/light-pair/light-pair';

import './scene.styl';

@connect(state => ({
  simulator: state.simulator
}))

export default class Scene extends React.Component {
  static propTypes = {
    lightPairs: React.PropTypes.array.isRequired
  };

  render() {
    let {lightPairs} = this.props.simulator;

    return (
      <div className="scene">
        {(items) => {
          lightPairs.forEach(pair => {
            items.push(<LightPair lights={pair.items} />);
          });
          return items;
        }([])}
      </div>
    );
  }
}