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

const extensionProps: HostProps = {
  extensionVersionUuid: 'extensionVersionUuid',
  app: {
    id: 'app-id',
    title: 'App name',
    developerName: 'Partner company name',
    applicationUrl: 'https://example.com',
    installation: {
      launchUrl: 'https://example.com',
    },
    icon: {
      transformedSrc:
        'https://cdn.shopify.com/shopifycloud/shopify/assets/default-app-74bfb89634baf86f3402062ef55df218fe55b4f2775ff605d0ccfe1a20f9c0d3.png',
    },
  },
  appId: 'app-id',
  script: THIRD_PARTY_SCRIPT,
  extensionPoint: 'Admin::Product::SubscriptionPlan::Add',
};

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
    <AppProvider theme={theme} i18n={translations} features={{newDesignLanguage: true}}>
      <Host {...extensionProps} />
    </AppProvider>
  );
}

function Host(props: HostProps) {
  switch (EXTENSION_POINT) {
    default:
      return <ProductSubscriptionHost {...props} />;
  }
}
