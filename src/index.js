import React from 'react';
import { BackHandler } from 'react-native';
import { CuriProvider } from '@curi/react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store'
import router from './router';
import render from './render';

BackHandler.addEventListener("hardwareBackPress", () => {
  // close the app when pressing back button on initial screen
  if (router.history.index === 0) {
    return false;
  }
  router.history.go(-1);
  return true;
});

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CuriProvider router={router}>
        {render}
      </CuriProvider>
    </PersistGate>
  </Provider>
);
