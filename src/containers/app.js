import React         from 'react';
import {createRedux} from 'redux';
import {Provider}    from 'redux/react';
import reducer       from 'components/simulator/reducer';
import Simulator     from 'components/simulator/simulator'

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