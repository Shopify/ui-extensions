import React from 'react';
import {AppProvider} from '@shopify/polaris';
import {StateProvider} from './utils/StateProvider';
import GlobalReducer from './utils/globalReducer';
import App from './app';
import {HeaderProps} from './app/Header';

type ComponentsList = {
  componentList?: string[];
};

type Props = HeaderProps & ComponentsList;

export default function UIBuilder(props) {
  const initialState = props;

  return (
    <AppProvider i18n={{}}>
      <StateProvider initialState={initialState} reducer={GlobalReducer}>
        <App {...props} />
      </StateProvider>
    </AppProvider>
  );
}
