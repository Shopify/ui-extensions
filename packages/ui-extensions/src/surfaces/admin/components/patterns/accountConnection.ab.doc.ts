import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Account connection',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Enable merchants to connect or disconnect their store from external accounts or services.',

  description: `Many apps integrate with external services like marketing platforms, sales channels, or analytics providers. The account connection composition gives merchants a clear interface to connect or disconnect these integrations.

  Display connection status, the connected account name, and provide actions to connect or disconnect. Place this composition in your settings or on a dedicated integrations page.
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/accountConnection.png',
  usedComponents: [
    'Button',
    'Grid',
    'GridItem',
    'Heading',
    'Section',
    'Stack',
    'Text',
  ],
  recommendedApis: ['Modal API', 'Toast API'],
  recommendedTemplates: ['Settings'],
  defaultExample: {
    description:
      'Merchants need to connect or disconnect external services (e.g. marketing platforms, sales channels) from your app. This pattern displays account connection layout with a connect button and terms. The [grid](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) aligns account information and button, the [section](/docs/api/app-home/polaris-web-components/layout-and-structure/section) provides padding, and the terms text below describes the connection agreement.',
    codeblock: {
      title: 'Display connection status with connect button and terms',
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
          layout: 'compositionPattern',
        },
      ],
    },
  },
  examples: {
    description: `The examples below show how you can extend the account connection pattern with additional functionality:

- [Modal API](#example-confirm-disconnect-with-modal): Confirm account disconnection before removing an integration.
- [Toast API](#example-show-connection-feedback-with-toast): Show feedback when connection status changes.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use the [Modal API](/docs/api/app-home/apis/modal-api) to confirm account disconnection before removing the integration.',
            codeblock: {
              title: 'Confirm disconnect with Modal',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/accountConnection-modal.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/accountConnection-modal.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Toast API](/docs/api/app-home/apis/toast) to show feedback when an account is connected or disconnected.',
            codeblock: {
              title: 'Show connection feedback with Toast',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/accountConnection-toast.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/accountConnection-toast.html',
                  language: 'html',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
