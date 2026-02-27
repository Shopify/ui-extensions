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
  recommendedApis: ['Modal API', 'Navigation API', 'Toast API'],
  recommendedTemplates: ['Index'],
  defaultExample: {
    description:
      'Merchants need to view, search, filter, and take bulk actions on collections of items. This pattern displays an index table with search, sort, and bulk actions. Key attributes include `slot="filters"` on the [grid](/docs/api/app-home/polaris-web-components/layout-and-structure/grid) to place controls in the filters area, `clickDelegate` on [table rows](/docs/api/app-home/polaris-web-components/layout-and-structure/table) to connect clicks to checkboxes, and `listSlot` on [table headers](/docs/api/app-home/polaris-web-components/layout-and-structure/table) to control responsive stacking. Use the [Navigation API](/docs/api/app-home/apis/navigation) for programmatic navigation and the [Toast API](/docs/api/app-home/apis/toast) for confirming successful actions.',
    codeblock: {
      title: 'Display an index table with search, sort, and bulk actions',
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
  examples: {
    description: `The examples below show how you can extend the index table with additional functionality:

- [Modal API](#example-confirm-bulk-actions-with-modal): Confirm destructive bulk actions before executing them.
- [Navigation API](#example-navigate-to-detail-pages): Provide row click navigation within tables.
- [Toast API](#example-show-bulk-action-feedback-with-toast): Present bulk action feedback when actions complete.
- [Pagination](#example-add-pagination): Add page navigation when managing large data sets.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Table with pagination controls for navigating large datasets.',
            codeblock: {
              title: 'Add pagination',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/indexTable-pagination.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/indexTable-pagination.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Modal API](/docs/api/app-home/apis/modal-api) to confirm destructive bulk actions before executing them.',
            codeblock: {
              title: 'Confirm bulk actions with Modal',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/indexTable-bulk-selection.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/indexTable-bulk-selection.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use `href` attributes on row elements to navigate merchants to detail pages when they click a row.',
            codeblock: {
              title: 'Navigate to detail pages',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/indexTable-nav.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/indexTable-nav.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Toast API](/docs/api/app-home/apis/toast) to show feedback when bulk actions complete.',
            codeblock: {
              title: 'Show bulk action feedback with Toast',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/indexTable-toast.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/indexTable-toast.html',
                  language: 'html',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
