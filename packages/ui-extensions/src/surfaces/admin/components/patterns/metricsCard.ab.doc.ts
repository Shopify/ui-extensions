import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Metrics card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Display key metrics, statistics, or trends at a glance.',
  description: `Merchants want to see how they're doing at a glance. The metrics card composition highlights important numbers, statistics, or trends so merchants can quickly understand their activity and performance.

  Use metrics cards on your homepage or dashboard to surface the data merchants care about most. Include trend indicators when historical comparison adds context. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines for apps.
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
