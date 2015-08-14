// Light component

import React from 'react';
import * as Consts from 'constants/simulator';

import './light.styl';

let CSSColorsByModes = {
  [Consts.LIGHT_MODE_RED]:    'red',
  [Consts.LIGHT_MODE_ORANGE]: 'orange',
  [Consts.LIGHT_MODE_GREEN]:  'green'
};

let CSSPositions = {
  [Consts.LIGHT_POS_TOP]:    'top',
  [Consts.LIGHT_POS_BOTTOM]: 'bottom',
  [Consts.LIGHT_POS_LEFT]:   'left',
  [Consts.LIGHT_POS_RIGHT]:  'right'
};

function prefixClassName(name) {
  return 'm-' + name;
}

export default class Light extends React.Component{
  static propTypes = {
    position: React.PropTypes.string.isRequired,
    mode:     React.PropTypes.string.isRequired
  };

  render() {
    let {position, mode} = this.props;
    let colors = ['red', 'orange', 'green'];
    let classNameList = ['light', prefixClassName(CSSPositions[position])]

    let lightGlassData = colors.map(color => {
      let classNameList = [
        'light-glass',
        prefixClassName(color)
      ];

      if (CSSColorsByModes[mode] === color) {
        classNameList.push(
          prefixClassName('active')
        )
      }

      return {
        classNameList: classNameList
      };
    });

    return (
      <div className={classNameList.join(' ')}>
        {(items) => {
          lightGlassData.forEach(lightGlass => {
            items.push(<div className={lightGlass.classNameList.join(' ')}></div>)
          })
          return items;
        }([])}
      </div>
    );
  }
}