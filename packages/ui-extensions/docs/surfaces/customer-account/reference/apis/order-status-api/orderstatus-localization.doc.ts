import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order Status Localization API',
  description:
    "The Order Status Localization API provides the buyer's currency, language, and country context on the order status page. Use this API to adapt your extension's display to the buyer's locale and region.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      "Read the order's currency and display the currency code. This example uses the `useCurrency` hook to access the `isoCode` property.",
    codeblock: {
      title: 'Display order currency',
      tabs: [
        {
          code: '../../examples/apis/orderstatus-localization-display-order-currency.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/orderstatus-localization-display-order-currency.example.ts',
          language: 'js',
          title: 'TS',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        "The `OrderStatusApi` object provides localization details for the order. Access the following properties on the `OrderStatusApi` object to read the buyer's locale context.",
      type: 'Docs_OrderStatus_LocalizationApi',
    },
    {
      title: 'useCurrency',
      description:
        'Returns the currency used for the order on the order status page, including its ISO 4217 code.',
      type: 'UseCurrencyGeneratedType',
    },
    {
      title: 'useLanguage',
      description:
        'Returns the language the buyer sees on the order status page, including its BCP 47 language tag.',
      type: 'UseLanguageGeneratedType',
    },
    {
      title: 'useLocalizationCountry',
      description: "Returns the buyer's country context for the order.",
      type: 'UseLocalizationCountryGeneratedType',
    },
    {
      title: 'useI18n',
      description:
        "Returns utilities for formatting numbers, currencies, and dates according to the buyer's locale.",
      type: 'UseI18nGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Use `useI18n` for formatting**: Use the `i18n` object's `formatCurrency`, `formatNumber`, and `formatDate` utilities instead of building your own formatting logic.\n- **Handle undefined country**: The `country` property may be `undefined` if the buyer's location is unknown. Don't assume a country is always available.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- This API provides raw localization data only. For formatted dates, numbers, and translated strings, use the [Localization API](/docs/api/customer-account-ui-extensions/target-apis/platform-apis/localization-api).',
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          "Read the buyer's country context and display the region information. This example uses `useLocalizationCountry` and handles `undefined` when the country is unknown.",
        codeblock: {
          title: 'Show buyer region',
          tabs: [
            {
              code: '../../examples/apis/orderstatus-localization-show-buyer-region.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/orderstatus-localization-show-buyer-region.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          "Format a money amount using the buyer's locale and the order's currency. This example uses `useI18n` to call `formatCurrency` with the order's currency code.",
        codeblock: {
          title: 'Format with locale',
          tabs: [
            {
              code: '../../examples/apis/orderstatus-localization-format-with-locale.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/orderstatus-localization-format-with-locale.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
