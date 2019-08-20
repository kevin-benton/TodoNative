import React, {Component} from 'react';
import {Provider} from 'react-redux';

import RootContainer from 'TodoNative/App/Containers/RootContainer';
import createStore from 'TodoNative/App/Redux';

const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * TODO: Add redux.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
