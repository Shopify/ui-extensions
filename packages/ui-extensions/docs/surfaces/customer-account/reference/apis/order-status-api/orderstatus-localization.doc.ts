import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order Status Localization API',
  description:
    "The Order Status Localization API provides read-only access to the buyer's locale, currency, time zone, country, and market context on the order status page. Use this API to adapt your extension's content to the buyer's region, including formatting prices and selecting translations.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        "The `OrderStatusApi` object provides the buyer's locale, currency, time zone, country, and market context. Access the following properties on the `OrderStatusApi` object to read localization details and adapt your extension's content to the buyer's region.",
      type: 'Docs_OrderStatus_LocalizationApi',
    },
  ],
  defaultExample: {
    description:
      "Format money amounts using the buyer's currency code and symbol. This example reads `shopify.localization.currency.isoCode` and uses `Intl.NumberFormat` to display properly formatted currency values.",
    codeblock: {
      title: 'Format currency values',
      tabs: [
        {
          code: '../../examples/apis/localization-currency.example.jsx',
          language: 'jsx',
          title: 'jsx',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          "Show region-specific content based on the buyer's country and market. This example reads `shopify.localization.country` and `market` to display local support information tailored to the buyer's location.",
        codeblock: {
          title: 'Adapt content by region',
          tabs: [
            {
              code: '../../examples/apis/localization-region.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          "Determine which language to use for your extension based on the buyer's locale. This example reads `shopify.localization.extensionLanguage.isoCode` and selects translations from an inline map.",
        codeblock: {
          title: 'Load extension translations',
          tabs: [
            {
              code: '../../examples/apis/localization-translations.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Use `extensionLanguage` for translations**: The `extensionLanguage` property returns the language your extension supports, falling back to your default locale if the buyer's language isn't supported. Use this value to load the correct translation file.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- This API provides raw localization data only. For formatted dates, numbers, and translated strings, use the [Localization API](/docs/api/customer-account-ui-extensions/target-apis/platform-apis/localization-api).',
    },
  ],
  related: [],
};

export default data;
