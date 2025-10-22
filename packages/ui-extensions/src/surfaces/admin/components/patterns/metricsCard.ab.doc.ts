import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Metrics card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Display key metrics, statistics, or trends at a glance.',
  description: `Metrics cards are used to highlight important numbers, statistics, or trends from your app, so merchants can quickly understand their activity and performance.
  
  
  | Used to | Examples |
  | --- | --- |
  | Show app-specific metrics | Email open rates, active subscribers |
  | Visualize user engagement | Social media followers, campaign clicks |
  ---
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
