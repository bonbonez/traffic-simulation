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