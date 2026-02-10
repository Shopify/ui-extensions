import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Footer help',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Footer help is used to refer merchants to more information related to the product or feature they’re using.',

  description: `Merchants sometimes need more context than a page can provide. The footer help composition offers a subtle way to link to documentation, support, or related information at the bottom of a page.

  Place footer help at the bottom of the page or section it relates to with clear, descriptive link text that tells merchants where they'll go. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines for apps.
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
