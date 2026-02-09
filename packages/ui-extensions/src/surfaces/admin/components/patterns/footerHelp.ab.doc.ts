import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Footer help',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Footer help is used to refer merchants to more information related to the product or feature they’re using.',

  description: `Footer help is used to refer merchants to more information related to the product or feature they're using, such as documentation links, support access, or legal information.

  Place footer help at the bottom of the page or section it relates to. Use clear, descriptive link text that tells merchants where they'll go.

  This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
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
