import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Empty state',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Provide guidance and encourage action when no data or items are available.',
  description: `Empty states are used when a list, table, or chart has no items or data to show. This is an opportunity to guide merchants toward their next action.

This pattern is a recommended design for apps in the [Built for Shopify program](/docs/apps/launch/built-for-shopify/requirements).
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/emptyState.png',
  defaultExample: {
    codeblock: {
      title: 'Empty state',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/emptyState.html',
          language: 'preview',
        },
        {
          title: 'jsx',
          code: 'examples/emptyState.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },

  related: [
    {
      name: 'Built for Shopify',
      subtitle: 'Requirements',
      url: '/docs/apps/launch/built-for-shopify/requirements',
      type: 'component',
    },
  ],
};

export default data;
