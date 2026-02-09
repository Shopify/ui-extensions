import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Account connection',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Enable merchants to connect or disconnect their store from external accounts or services.',

  description: `The account connection component lets merchants connect or disconnect their store to external accounts, like sales channels or marketing platforms.

This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/accountConnection.png',
  defaultExample: {
    codeblock: {
      title: 'Account connection',
      tabs: [
        {
          title: 'html',
          code: 'examples/accountConnection.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/accountConnection.jsx',
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
