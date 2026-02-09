import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Homepage',
  overviewPreviewDescription:
    'Design your app homepage for daily merchant value.',
  description: `The app homepage is the first thing merchants see when they open your app. Design it to provide daily value through status updates, metrics, and clear actions merchants can take.

Use the homepage to surface key information at a glance: performance metrics, items needing attention, and onboarding guidance for new users.

This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
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
