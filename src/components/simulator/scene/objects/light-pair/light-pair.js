// LightPair component simply unites two lights in one group

import React     from 'react';
import {connect} from 'redux/react';
import Light     from '../light/light';

export default class LightPair extends React.Component{

  static propTypes = {
    lights: React.PropTypes.array.isRequired
  };

  render() {
    let {lights} = this.props;

    return (
      <div className="light-pair">
        {(items) => {
          lights.forEach(light => {
            items.push(<Light {...light} />)
          });
          return items;
        }([])}
      </div>
    );
  }
}