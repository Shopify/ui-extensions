import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
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
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/homepage.png',
  defaultExample: {
    codeblock: {
      title: 'Homepage',
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
