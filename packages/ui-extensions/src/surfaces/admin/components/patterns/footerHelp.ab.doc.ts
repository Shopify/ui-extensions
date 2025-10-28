import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Footer help',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Footer help is used to refer merchants to more information related to the product or feature they’re using.',

  description: `Footer help is used to refer merchants to more information related to the product or feature they’re using.

  | Used to | Examples |
  | --- | --- |
  | Refer merchants to related help docs |  Learn more about [shipping zones]|
  | Offer support as a secondary option  | [Contact us] about email marketing |

  ---
  

  
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/footerHelp.png',
  defaultExample: {
    codeblock: {
      title: 'Footer help',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/footerHelp.html',
          language: 'preview',
        },
        {
          title: 'jsx',
          code: 'examples/footerHelp.jsx',
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
