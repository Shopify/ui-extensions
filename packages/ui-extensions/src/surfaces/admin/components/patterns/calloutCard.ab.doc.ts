import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Callout card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Encourage merchants to take action on new features or opportunities.',
  description: `When you release a new feature or want to highlight an opportunity, the callout card composition draws attention without being intrusive. It encourages merchants to take action with a clear message and prominent button.

  Use callout cards sparingly to announce features, promote functionality, or guide merchants through common first actions. Remove them once merchants have engaged. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
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
