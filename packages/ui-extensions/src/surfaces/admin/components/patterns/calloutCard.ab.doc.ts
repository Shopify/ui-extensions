import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Callout card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Encourage merchants to take action on new features or opportunities.',
  description: `Callout cards encourage merchants to take action on a new feature or opportunity. Use them to announce features, promote functionality, or guide merchants through common first actions.

This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/calloutCard.png',
  defaultExample: {
    codeblock: {
      title: 'Callout card',
      tabs: [
        {
          title: 'html',
          code: 'examples/calloutCard.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/calloutCard.jsx',
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
