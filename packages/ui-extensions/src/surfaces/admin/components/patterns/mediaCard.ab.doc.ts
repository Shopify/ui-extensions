import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Media card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Present visual information alongside actionable, educational content.',
  description: `Media cards provide a consistent layout to present visual information to merchants. Visual media is used to provide additional context to the written information it's paired with.

  | Used to | Examples |
  | --- | --- |
  | Educate merchants on key actions | Show how to connect a social account with a demo image |
  | Provide clear calls to action | Show campaign preview with a "Send campaign" button |

  ---
  

  
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/mediaCard.png',
  defaultExample: {
    codeblock: {
      title: 'Media card',
      tabs: [
        {
          title: 'html',
          code: 'examples/mediaCard.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/mediaCard.jsx',
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
