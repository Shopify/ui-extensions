import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'IndexTable',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Display and manage data with powerful table interactions.',
  description: `Lorem ipsum`,
  isVisualComponent: true,
  category: 'Patterns',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/index.png',
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/patterns/index-table-example.png',
    codeblock: {
      title: 'IndexTable',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/indexTable.html',
          language: 'preview',
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
