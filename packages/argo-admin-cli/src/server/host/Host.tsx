import React from 'react';
import {AppProvider} from '@shopify/polaris';
import {ExtensionPoint} from '@shopify/argo-admin';
import {ThemeConfig} from '@shopify/polaris/types/latest/src/utilities/theme';
import translations from '@shopify/polaris/locales/en.json';

import {ProductSubscriptionHost} from './ProductSubscriptionHost';
import {HostProps} from './types';
import logoUrl from './logo.svg';

export {HostWrapper as Host};

declare const THIRD_PARTY_SCRIPT: string;
declare const EXTENSION_POINT: ExtensionPoint;

function HostWrapper() {
  const theme: ThemeConfig = {
    colors: {
      topBar: {
        background: '#FAFAFA',
      },
    },
    logo: {
      topBarSource: logoUrl,
      url: '/',
      accessibilityLabel: 'Shopify',
    },
  };

  return (
    <AppProvider theme={theme} i18n={translations}>
      <Host script={THIRD_PARTY_SCRIPT} />
    </AppProvider>
  );
}

function Host(props: HostProps) {
  switch (EXTENSION_POINT) {
    default:
      return <ProductSubscriptionHost {...props} />;
  }
}
