import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Action Extension API',
  description:
    'This API is available to all action extension types. Refer to the [tutorial](/docs/apps/admin/admin-actions-and-blocks/build-an-admin-action) for more information. Note that the [`AdminAction`](/docs/api/admin-extensions/polaris-web-components/other/adminaction) component is required to build Admin action extensions.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Process selected resources by sending their IDs to your app backend. Use the `close()` method to dismiss the modal after completing the operation.',
    codeblock: {
      title: 'Process selected products',
      tabs: [
        {
          code: './examples/process-selected-products.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'ActionExtensionApi',
      description: '',
      type: 'ActionExtensionApi',
    },
  ],
  examples: {
    description: 'Common action extension workflows',
    examples: [
      {
        description:
          'Select additional resources using the resource picker within an action. Use this to let merchants choose related products for bundle creation, collection management, or bulk operations.',
        codeblock: {
          title: 'Select additional resources',
          tabs: [
            {
              code: './examples/select-additional-resources.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Fulfill orders with error handling to manage failures gracefully. Use `try-catch` blocks to catch API errors and provide meaningful feedback when fulfillment operations fail.',
        codeblock: {
          title: 'Fulfill order with error handling',
          tabs: [
            {
              code: './examples/handle-errors.js',
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
