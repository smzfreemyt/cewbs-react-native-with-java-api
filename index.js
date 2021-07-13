/**
 * @format
 */
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './app/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './app/stores/store';

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
