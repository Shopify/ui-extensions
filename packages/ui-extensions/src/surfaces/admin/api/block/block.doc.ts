import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Block Extension API',
  description:
    'This API is available to all block extension types. Refer to the [tutorial](/docs/apps/admin/admin-actions-and-blocks/build-an-admin-block) for more information.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Query product data using the [GraphQL Admin API](/docs/api/admin-graphql) and display contextual information. Access the currently viewed product ID from the `data` property.',
    codeblock: {
      title: 'Display product information',
      tabs: [
        {
          code: './examples/display-product-info.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'BlockExtensionApi',
      description: '',
      type: 'BlockExtensionApi',
    },
  ],
  examples: {
    description: 'Common block extension patterns',
    examples: [
      {
        description:
          'Navigate from a block to an action extension after checking resource eligibility. Query your backend to validate conditions, then launch the action extension only when requirements are met.',
        codeblock: {
          title: 'Navigate to action extension',
          tabs: [
            {
              code: './examples/navigate-to-action.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Select related products to create product recommendations or associations. Use the resource picker to let merchants choose products while viewing a product details page.',
        codeblock: {
          title: 'Select related products',
          tabs: [
            {
              code: './examples/select-related-products.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
};

export default data;
