import React from 'react';
import {AppProvider} from '@shopify/polaris';
import {StateProvider} from './utils/StateProvider';
import GlobalReducer from './utils/globalReducer';
import App from './app';

export default function UIBuilder() {
  const initialState = {};

  return (
    <AppProvider i18n={{}}>
      <StateProvider initialState={initialState} reducer={GlobalReducer}>
        <App />
      </StateProvider>
    </AppProvider>
  );
}
