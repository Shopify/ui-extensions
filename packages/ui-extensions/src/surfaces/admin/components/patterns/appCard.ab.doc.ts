import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'App card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Introduce and promote relevant apps to merchants within your app experience.',
  description: `Some tasks are better handled by specialized apps. The app card composition provides a consistent way to recommend complementary apps that extend your functionality or help merchants accomplish related tasks.

  Use app cards to suggest integrations, recommend partners, or highlight apps that work well alongside yours. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
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
