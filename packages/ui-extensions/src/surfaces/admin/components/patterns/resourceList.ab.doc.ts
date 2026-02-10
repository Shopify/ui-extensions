import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Resource list',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'A resource list displays a collection of objects of the same type, like products or customers. The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.',

  description: `When merchants need to browse and select from a collection of similar items, a resource list provides a compact, scannable format. It helps merchants find an object and navigate to its full-page representation.

  Use resource lists for smaller collections, or when you need a simpler selection interface within a card or modal. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines for apps.
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/resourceList.png',
  defaultExample: {
    codeblock: {
      title: 'Resource list',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/resourceList.html',
          language: 'preview',
        },
        {
          title: 'jsx',
          code: 'examples/resourceList.jsx',
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
