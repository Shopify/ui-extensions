import {Settings, ProductSubscriptionAction, SubscriptionData} from './types';

export const LOCALES = [
  {
    label: 'cs - Czech',
    value: 'cs',
  },
  {
    label: 'da - Danish',
    value: 'da',
  },
  {
    label: 'de - German',
    value: 'de',
  },
  {
    label: 'en - English',
    value: 'en',
  },
  {
    label: 'es - Spanish',
    value: 'es',
  },
  {
    label: 'fi - Finnish',
    value: 'fi',
  },
  {
    label: 'fr - French',
    value: 'fr',
  },
  {
    label: 'hi - Hindi',
    value: 'hi',
  },
  {
    label: 'it - Italian',
    value: 'it',
  },
  {
    label: 'ja - Japanese',
    value: 'ja',
  },
  {
    label: 'ko - Korean',
    value: 'ko',
  },
  {
    label: 'ms - Malay',
    value: 'ms',
  },
  {
    label: 'nb - Norwegian',
    value: 'nb',
  },
  {
    label: 'nl - Dutch',
    value: 'nl',
  },
  {
    label: 'pl - Polish',
    value: 'pl',
  },
  {
    label: 'pt-BR - Portuguese (Brazil)',
    value: 'pt-BR',
  },
  {
    label: 'pt-PT - Portuguese (Portugal)',
    value: 'pt-PT',
  },
  {
    label: 'sv - Swedish',
    value: 'sv',
  },
  {
    label: 'th - Thai',
    value: 'th',
  },
  {
    label: 'tr - Turkish',
    value: 'tr',
  },
  {
    label: 'zh-CN - Chinese (Simplified)',
    value: 'zh-CN',
  },
  {
    label: 'zh-TW - Chinese (Traditional)',
    value: 'zh-TW',
  },
];

export const actionFields: Record<
  ProductSubscriptionAction,
  (keyof SubscriptionData)[]
> = {
  [ProductSubscriptionAction.Add]: ['action', 'productId', 'variantId'],
  [ProductSubscriptionAction.Create]: ['action', 'productId', 'variantId'],
  [ProductSubscriptionAction.Edit]: [
    'action',
    'productId',
    'sellingPlanGroupId',
    'variantId',
  ],
  [ProductSubscriptionAction.Remove]: [
    'action',
    'productId',
    'sellingPlanGroupId',
    'variantId',
    'variantIds',
  ],
};

export const defaultSettings: Settings = {
  data: {
    action: ProductSubscriptionAction.Create,
    productId: '1',
    sellingPlanGroupId: '2',
    variantId: '3',
    variantIds: ['4'],
  },
  locale: 'en',
  sessionToken: '',
  extensionOpen: false,
};
