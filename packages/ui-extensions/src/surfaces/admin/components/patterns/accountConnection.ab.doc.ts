import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Account connection',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Enable merchants to connect or disconnect their store from external accounts or services.',

  description: `The account connection component is used so merchants can connect or disconnect their store to various accounts. For example, if merchants want to use the Facebook sales channel, they need to connect their Facebook account to their Shopify store.

  | Used to | Examples |
  | --- | --- |
  | Display connection status | Show if a sales channel is connected or disconnected |
  | Allow merchants to disconnect accounts  | Enable merchants to disconnect from a marketing platform |

  ---
  

  
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
