import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getExamples,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
  getLinksByTag,
} from '../helper.docs';

const {
  api,
  'api-subscribable': apiSubscribable,
  translate,
  'translate-pluralization': translatePluralization,
  settings,
  'settings-access': settingAccess,
  'storefront-query-api': storeFrontApiQuery,
  'storefront-query-with-fetch': storeFrontApiFetch,
  'buyer-journey-intercept/extension-banner':
    buyerJourneyInterceptExtensionBanner,
  'buyer-journey-intercept/page-level-error':
    buyerJourneyInterceptPageLevelError,
  'buyer-journey-intercept/target-native-field':
    buyerJourneyInterceptTargetNativeField,
  'session-token': sessionToken,
  'session-token-jwt': sessionTokenJwt,
} = getExamples(['jsx', 'js']);

const data: ReferenceEntityTemplateSchema = {
  name: 'StandardApi',
  overviewPreviewDescription: 'The base API for all extension points.',
  description: 'This base API object is provided to all extension points.',
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'See [examples](#examples) for more information on how to use the API.',
      type: 'StandardApi',
    },
  ],
  defaultExample: getExample('default', ['jsx', 'js']),
  examples: {
    description:
      'Learn how to use the API with JavaScript (JS) and React. See [React Hooks](../react-hooks) for all available hooks.',
    exampleGroups: [
      {
        title: 'Using the API',
        examples: [api, apiSubscribable],
      },
      {
        title: 'Localization',
        examples: [translate, translatePluralization],
      },
      {
        title: 'Settings',
        examples: [settings, settingAccess],
      },
      {
        title: 'Storefront API access',
        examples: [storeFrontApiQuery, storeFrontApiFetch],
      },
      {
        title: 'Buyer journey',
        examples: [
          buyerJourneyInterceptTargetNativeField,
          buyerJourneyInterceptPageLevelError,
          buyerJourneyInterceptExtensionBanner,
        ],
      },
      {
        title: 'Session Token',
        examples: [sessionToken, sessionTokenJwt],
      },
    ],
  },
  related: getLinksByTag('apis', 'StandardApi'),
};

export default data;
