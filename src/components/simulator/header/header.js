import React from 'react';
import Switch from './switch/switch';

import './header.styl';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Switch />
      </div>
    )
  }
}