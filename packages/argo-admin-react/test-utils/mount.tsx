import React from 'react';
import {createMount, mount} from '@shopify/react-testing';
import {AppProvider} from '@shopify/polaris';

// Added for typings to work
import '@shopify/react-testing/matchers';

export {mount};

export const mountWithAppProvider = createMount({
  context(context) {
    return context;
  },
  render(element) {
    return <AppProvider i18n={{}}>{element}</AppProvider>;
  },
});
