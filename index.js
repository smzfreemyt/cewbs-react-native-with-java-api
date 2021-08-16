/**
 * @format
 */
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './app/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './app/stores/store';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

let persistor = persistStore(store);

const AppWrapper = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
