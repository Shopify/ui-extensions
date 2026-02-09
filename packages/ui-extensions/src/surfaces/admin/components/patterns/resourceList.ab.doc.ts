import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Resource list',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'A resource list displays a collection of objects of the same type, like products or customers. The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.',

  description: `A resource list displays a collection of objects of the same type. The main job is to help merchants find an object and navigate to its full-page representation.

This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
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
