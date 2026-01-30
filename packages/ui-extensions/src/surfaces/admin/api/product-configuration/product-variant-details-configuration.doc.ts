import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Product Variant Details Configuration API',
  description:
    'This API is available to product configuration extensions that render on the product variant details page. See the [tutorial](/docs/apps/selling-strategies/bundles/product-config) for more information.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Select component variants for bundle configuration. Build variant-level bundles by choosing which product variants to include as components.',
    codeblock: {
      title: 'Select variant components',
      tabs: [
        {
          code: './examples/select-variant-components.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'ProductVariantDetailsConfigurationApi',
      description: '',
      type: 'ProductVariantDetailsConfigurationApi',
    },
  ],
  examples: {
    description: 'Configure variant-level bundles',
    examples: [
      {
        description:
          'Load existing variant bundle configuration from metafields. Query variant-specific bundle data including SKU and display name to populate your configuration interface.',
        codeblock: {
          title: 'Load variant bundle configuration',
          tabs: [
            {
              code: './examples/load-variant-bundle-config.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Create new component variants using intents. Launch variant creation workflow with parent product context to add new variant components to bundles.',
        codeblock: {
          title: 'Create component variant',
          tabs: [
            {
              code: './examples/create-variant-component.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
};

export default data;
