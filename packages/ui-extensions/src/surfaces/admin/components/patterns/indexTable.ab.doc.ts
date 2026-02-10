import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Index table',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Display and manage data with powerful table interactions.',
  description: `Most apps need a way for merchants to manage collections of items. The index table composition provides a scannable list with search, filtering, sorting, and bulk actions.

  Use checkboxes for bulk selection, reveal row actions on hover, and include pagination for large data sets. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines for apps.
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
