import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Product Details Configuration API',
  description:
    'This API is available to product configuration extensions that render on the product details page. See the [tutorial](/docs/apps/selling-strategies/bundles/product-config) for more information.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Select component products for bundle configuration using the resource picker. Build product bundles by choosing which products to include as components.',
    codeblock: {
      title: 'Select bundle components',
      tabs: [
        {
          code: './examples/select-bundle-components.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'ProductDetailsConfigurationApi',
      description: '',
      type: 'ProductDetailsConfigurationApi',
    },
  ],
  examples: {
    description: 'Configure product bundles',
    examples: [
      {
        description:
          'Load existing bundle configuration from product metafields. Query bundle component data to populate your configuration UI with current settings.',
        codeblock: {
          title: 'Load bundle configuration',
          tabs: [
            {
              code: './examples/load-bundle-config.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Create new component products using intents. Launch product creation workflow and capture the result to add new components to bundles.',
        codeblock: {
          title: 'Create component product',
          tabs: [
            {
              code: './examples/navigate-to-component.js',
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
