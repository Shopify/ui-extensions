import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'App card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Introduce and promote relevant apps to merchants within your app experience.',
  description: `App cards provide a consistent layout for presenting another app to merchants. They highlight apps that can extend functionality or help merchants accomplish related tasks.

This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
  
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/appCard.png',
  defaultExample: {
    codeblock: {
      title: 'App card',
      tabs: [
        {
          title: 'html',
          code: 'examples/appCard.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/appCard.jsx',
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
