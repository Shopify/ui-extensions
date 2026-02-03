import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Action Extension API',
  description:
    'This API is available to all action extension types. Refer to the [tutorial](/docs/apps/admin/admin-actions-and-blocks/build-an-admin-action) for more information. Note that the [`AdminAction`](/docs/api/admin-extensions/polaris-web-components/other/adminaction) component is required to build Admin action extensions.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Send selected product IDs to your backend for bulk processing. This example shows how to map selected items, make an authenticated API call, and close the modal when the operation completes.',
    codeblock: {
      title: 'Process selected products',
      tabs: [
        {
          title: 'jsx',
          code: './examples/process-selected-products.jsx',
          language: 'jsx',
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
    description: 'Action extension patterns',
    examples: [
      {
        description:
          'Launch the [resource picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to select component products for a [bundle](/docs/apps/build/product-merchandising/bundles), then save the bundle configuration to your backend. This example demonstrates opening a resource picker from within an action modal and handling the selection result.',
        codeblock: {
          title: 'Select additional resources',
          tabs: [
            {
              title: 'jsx',
              code: './examples/select-additional-resources.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Fulfill an order through your app backend with proper error handling. This example shows loading states, `try-catch` blocks to catch errors, and displaying error messages when your backend fulfillment service fails.',
        codeblock: {
          title: 'Fulfill order with error handling',
          tabs: [
            {
              title: 'jsx',
              code: './examples/handle-errors.jsx',
              language: 'jsx',
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
