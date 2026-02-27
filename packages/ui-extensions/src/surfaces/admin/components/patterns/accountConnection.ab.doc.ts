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
  recommendedTemplates: ['Details'],
  defaultExample: {
    description:
      'This pattern uses [`s-grid`](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) to align account information with a connect button. The [`s-section`](/docs/api/app-home/polaris-web-components/layout-and-structure/section) provides consistent padding and the terms text below informs merchants of the connection agreement.',
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
          layout: 'compositionPattern',
        },
      ],
    },
  },
};

export default data;
