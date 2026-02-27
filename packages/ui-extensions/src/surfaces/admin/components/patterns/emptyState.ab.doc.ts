import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Empty state',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Provide guidance and encourage action when no data or items are available.',
  description: `Every app has moments when there's nothing to show yet and some action is required of the merchant before they can manage resources. The empty state composition turns these blank screens into opportunities by guiding merchants toward their first action.

  Include a clear explanation of what will appear here and a prominent call-to-action to help merchants get started. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
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
