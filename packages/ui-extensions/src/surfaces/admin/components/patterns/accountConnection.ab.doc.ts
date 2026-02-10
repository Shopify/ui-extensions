import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Account connection',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Enable merchants to connect or disconnect their store from external accounts or services.',

  description: `Many apps integrate with external services like marketing platforms, sales channels, or analytics providers. The account connection composition gives merchants a clear interface to connect or disconnect these integrations.

  Display connection status, the connected account name, and provide actions to connect or disconnect. Place this composition in your settings or on a dedicated integrations page. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines.
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
