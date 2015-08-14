// The main component of the application.

import React         from 'react';
import {createRedux} from 'redux';
import {Provider}    from 'redux/react';
import reducer       from 'components/simulator/reducer';
import Simulator     from 'components/simulator/simulator'

// Simply creating redux store singleton.
// This store will be available for all components
// that are nested in Provider component.
const redux = createRedux({
  simulator: reducer
});

export default class App extends React.Component {
  render() {
    return (
      <Provider redux={redux} >
        {() => <Simulator/>}
      </Provider>
    );
  }
}