import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Should Render API',
  description:
    'This API controls the render state of an admin action extension. Learn more in the <a href="https://shopify.dev/docs/apps/build/admin/actions-blocks/hide-extensions?extension=react#hide-an-admin-action">admin extensions tutorial</a>.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Show action only when items are selected. Check the `selected` array length to control action visibility based on whether merchants have made selections.',
    codeblock: {
      title: 'Check for selection',
      tabs: [
        {
          code: './examples/check-product-tag.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'ShouldRenderApi',
      description: '',
      type: 'ShouldRenderApi',
    },
  ],
  examples: {
    description: 'Conditionally show or hide actions',
    examples: [
      {
        description:
          'Show action only for single item selections. Use this pattern to restrict actions that work on individual resources only.',
        codeblock: {
          title: 'Require single selection',
          tabs: [
            {
              code: './examples/check-order-status.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Show bulk actions only when selection count is within acceptable limits. Prevent actions from appearing when no items or too many items are selected.',
        codeblock: {
          title: 'Validate selection count',
          tabs: [
            {
              code: './examples/bulk-selection-check.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Utility APIs',
  related: [],
};

export default data;
