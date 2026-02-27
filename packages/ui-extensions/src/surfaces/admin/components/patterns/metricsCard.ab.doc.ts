import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
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
  usedComponents: [
    'Badge',
    'Clickable',
    'Divider',
    'Grid',
    'Heading',
    'Section',
    'Stack',
    'Text',
  ],
  recommendedTemplates: ['Details'],
  defaultExample: {
    description:
      'This pattern displays metrics in a responsive grid with trend indicators. The [grid](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) uses responsive column templates for side-by-side layout on large screens and stacked layout on small screens. The [badge](/docs/api/app-home/polaris-web-components/feedback/badge) component shows trend indicators.',
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
          layout: 'compositionPattern',
        },
      ],
    },
  },
};

export default data;
