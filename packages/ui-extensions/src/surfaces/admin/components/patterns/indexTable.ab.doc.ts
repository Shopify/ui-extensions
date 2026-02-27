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
  usedComponents: [
    'Badge',
    'Box',
    'Button',
    'Checkbox',
    'Choice',
    'ChoiceList',
    'Clickable',
    'Divider',
    'Grid',
    'Image',
    'Link',
    'Popover',
    'Section',
    'Stack',
    'Table',
    'TextField',
    'Tooltip',
  ],
  recommendedApis: ['Navigation API', 'Modal API', 'Toast API'],
  recommendedTemplates: ['Index'],
  defaultExample: {
    description:
      'This pattern displays an index table with search, sort, and bulk actions. Key attributes include `slot="filters"` on the [grid](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) to place controls in the filters area, `clickDelegate` on [table rows](/docs/api/app-home/polaris-web-components/layout-and-structure/table) to connect clicks to checkboxes, and `listSlot` on [table headers](/docs/api/app-home/polaris-web-components/layout-and-structure/table) to control responsive stacking. Use the [Navigation API](/docs/api/app-home/apis/navigation) for programmatic navigation and the [Toast API](/docs/api/app-home/apis/toast) for confirming successful actions.',
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
          layout: 'compositionPattern',
          customStyles: {
            minHeight: '400px',
          },
        },
      ],
    },
  },
};

export default data;
