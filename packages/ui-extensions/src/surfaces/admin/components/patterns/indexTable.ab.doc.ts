import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Index table',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Display and manage data with powerful table interactions.',
  description: `Most apps need a way for merchants to manage collections of items, whether products, orders, campaigns, subscribers, or any resource your app creates. Start with the index table pattern to create a scannable list with search, filtering, sorting, and bulk actions that feels familiar because it mirrors how Shopify admin already works.

  This pattern exemplifies best practices and satisfies many [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements).
  `,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/indexTable.png',
  defaultExample: {
    codeblock: {
      title: 'Index table',
      tabs: [
        {
          title: 'html',
          code: 'examples/indexTable.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/indexTable.jsx',
          language: 'preview-jsx',
          customStyles: {
            minHeight: '400px',
          },
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
    {
      name: 'Table',
      subtitle: 'Component',
      url: '/docs/api/app-home/polaris-web-components/structure/table',
      type: 'component',
    },
  ],
};

export default data;
