import React from 'react';
import {AppProvider} from '@shopify/polaris';
import {ExtensionPoint} from '@shopify/argo-admin';
import {ThemeConfig} from '@shopify/polaris/dist/types/latest/src/utilities/theme';
import translations from '@shopify/polaris/locales/en.json';

import {ProductSubscriptionHost} from './ProductSubscriptionHost';
import {HostProps} from './types';

export {HostWrapper as Host};

declare const THIRD_PARTY_SCRIPT: string;
declare const EXTENSION_POINT: ExtensionPoint;

function getScriptUrl() {
  const absoluteUrlRegex = /^https?:\/\//i;
  if (absoluteUrlRegex.test(THIRD_PARTY_SCRIPT)) {
    return THIRD_PARTY_SCRIPT;
  }
  const url = new URL(location.href);
  url.pathname = THIRD_PARTY_SCRIPT;
  return url.toString();
}

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
  script: getScriptUrl(),
  extensionPoint: 'Admin::Product::SubscriptionPlan::Add',
};

function HostWrapper() {
  const theme: ThemeConfig = {
    logo: {
      topBarSource:
        'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg',
      accessibilityLabel: 'Shopify',
      url: '/',
    },
  };

  return (
    <AppProvider
      theme={theme}
      i18n={translations}
      features={{newDesignLanguage: true}}
    >
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
