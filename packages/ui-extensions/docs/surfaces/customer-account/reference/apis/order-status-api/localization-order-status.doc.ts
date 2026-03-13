import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Localization (Order Status API)',
  description: 'The API for localizing your extension.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_LocalizationApi',
    },
    {
      title: 'useCurrency',
      description: 'Returns the currency of the checkout.',
      type: 'UseCurrencyGeneratedType',
    },
    {
      title: 'useExtensionLanguage',
      description:
        "Returns the buyer's language, as supported by the extension.",
      type: 'UseExtensionLanguageGeneratedType',
    },
    {
      title: 'useLanguage',
      description:
        'Returns the current language of the checkout, and automatically re-renders your component if the language changes.',
      type: 'UseLanguageGeneratedType',
    },
    {
      title: 'useLocalizationCountry',
      description:
        'Returns the country of the checkout, and automatically re-renders your component if the country changes.',
      type: 'UseLocalizationCountryGeneratedType',
    },
    {
      title: 'useTimezone',
      description:
        'Returns the time zone of the checkout, and automatically re-renders your component if the time zone changes.',
      type: 'UseTimezoneGeneratedType',
    },
    {
      title: 'useLocalizationMarket',
      description:
        'Returns the market of the checkout, and automatically re-renders your component if it changes.',
      type: 'UseLocalizationMarketGeneratedType',
    },
  ],
  related: [],
};

export default data;
