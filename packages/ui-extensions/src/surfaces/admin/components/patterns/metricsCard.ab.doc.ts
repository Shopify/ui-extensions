import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Metrics card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Display key metrics, statistics, or trends at a glance.',
  description: `Metrics cards highlight important numbers, statistics, or trends so merchants can quickly understand their activity and performance.

  This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/metricsCard.png',
  defaultExample: {
    codeblock: {
      title: 'Metrics card',
      tabs: [
        {
          title: 'html',
          code: 'examples/metricsCard.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/metricsCard.jsx',
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
