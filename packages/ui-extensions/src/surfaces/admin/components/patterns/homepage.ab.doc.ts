import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Homepage',
  overviewPreviewDescription:
    'The primary landing page for your app, providing quick access to key information and actions.',
  description: `The first thing merchants see when they open your app in App Home is a landing page, associated with the route file \`app._index.jsx\` in React Router-based Shopify apps.

  It provides a clear entry point for merchants, and an opportunity to provide daily value through status updates, metrics, and clear actions merchants can take.  Surface key information at a glance like performance metrics, items needing attention, and onboarding guidance for new users.

  The homepage pattern provides this foundation while following proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines for apps.
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Templates',
  isOneColumnLayout: true,
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/homepage.png',
  usedComponents: [
    'Badge',
    'Banner',
    'Box',
    'Button',
    'Clickable',
    'Divider',
    'Grid',
    'Heading',
    'Icon',
    'Link',
    'Paragraph',
    'Section',
    'Stack',
    'Text',
  ],
  recommendedApis: ['Navigation API', 'Toast API'],
  recommendedCompositions: [
    'App card',
    'Callout card',
    'Media card',
    'Setup guide',
    'Footer help',
  ],
  defaultExample: {
    description:
      'Merchants need a clear entry point with key information and actions. This example surfaces a homepage for a Product Quality Auditor app with a score banner, metrics cards, setup guide, common issues summary, and a list of products needing attention.',
    codeblock: {
      title: 'Surface a homepage with score banner, metrics, and product list',
      tabs: [
        {
          title: 'html',
          code: './examples/homepage.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: './examples/homepage.jsx',
          language: 'preview-jsx',
          layout: 'templatePattern',
          customStyles: {
            minHeight: '400px',
          },
        },
      ],
    },
  },
};

export default data;
