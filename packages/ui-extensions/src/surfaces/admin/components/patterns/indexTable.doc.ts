import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Index table',
  description: `An index table displays a collection of similar objects—like products, orders, or customers—giving merchants an at-a-glance view to browse, search, and take action. Built on the [Table](/docs/api/app-home/polaris-web-components/structure/table) component with [Checkbox](/docs/api/app-home/polaris-web-components/forms/checkbox) for bulk selection, it's the primary way to present lists of resources.

  This pattern is a recommended design for apps in the [Built for Shopify](/docs/apps/launch/built-for-shopify/requirements) program. See [Best practices](#best-practices) below for more details.

  `,
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/indexTable.png',
  isVisualComponent: true,
  type: '',
  category: 'Patterns',
  subCategory: 'Compositions',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `Following these best practices ensures a consistent merchant experience and satisfies [Built for Shopify](/docs/apps/launch/built-for-shopify/requirements) requirements:

- [**4.1.1 Follow UX best practices**](/docs/apps/launch/built-for-shopify/requirements#follow-ux-best-practices): Tables should look and behave like the Shopify admin with consistent spacing and card containers
- [**4.1.2 Mobile-friendly**](/docs/apps/launch/built-for-shopify/requirements#mobile-friendly): Content must not require horizontal scrolling; columns should stack or collapse appropriately
- [**4.1.6 Use modals appropriately**](/docs/apps/launch/built-for-shopify/requirements#use-modals-appropriately): Destructive bulk actions (like Delete) should use [Modal](/docs/api/app-home/apis/modal) confirmations
- [**4.2.5 Guide merchants to logical actions**](/docs/apps/launch/built-for-shopify/requirements#guide-merchants-to-logical-actions): When presenting bulk actions, the most logical action should appear visually dominant`,
    },
    {
      type: 'Generic',
      anchorLink: 'apis-and-components',
      title: 'APIs and components',
      sectionContent: `- Use [\`s-page\`](/docs/api/app-home/polaris-web-components/structure/page) for page structure and primary actions (like "Create new")
- Use [Toast](/docs/api/app-home/apis/toast) for feedback after bulk actions
- Use [Navigation API](/docs/api/app-home/apis/navigation) for row click navigation to detail pages`,
    },
    {
      type: 'Generic',
      anchorLink: 'table-structure',
      title: 'Table structure',
      sectionContent: `- Use clear, descriptive column headers that help merchants understand the data at a glance.
- Include a primary identifier column (like name or ID) as the first column.
- Limit visible columns to essential information; use progressive disclosure for additional details.
- Provide sorting on relevant columns when the data set is large.`,
    },
    {
      type: 'Generic',
      anchorLink: 'bulk-actions',
      title: 'Bulk actions',
      sectionContent: `- Place bulk action buttons in a consistent location above or below the table.
- Disable bulk actions when no items are selected.
- Show a count of selected items when bulk selection is active.
- Confirm destructive bulk actions (like Delete) with a modal before executing.`,
    },
    {
      type: 'Generic',
      anchorLink: 'filtering-and-search',
      title: 'Filtering and search',
      sectionContent: `- Provide search functionality for large data sets.
- Use filters to help merchants narrow down results by status, date, or other relevant attributes.
- Show active filters clearly and make them easy to remove.
- Preserve filter and search state when navigating away and returning.`,
    },
  ],
  defaultExample: {
    description:
      'An index table with search filtering, sortable columns, bulk selection, and row-level actions for managing a collection of items.',
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
        } as any,
      ],
    },
    // @ts-expect-error - usedComponents is a proposed schema extension
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
      'TableBody',
      'TableCell',
      'TableHeader',
      'TableHeaderRow',
      'TableRow',
      'TextField',
      'Tooltip',
    ],
  },
  examples: {
    description: '',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Table with select all checkbox, selection count, and bulk action bar for managing multiple items at once.',
            codeblock: {
              title: 'Index table: Bulk selection',
              tabs: [
                {
                  title: 'html',
                  code: 'examples/indexTableBulkSelection.html',
                  language: 'html',
                },
                {
                  title: 'jsx',
                  code: 'examples/indexTableBulkSelection.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                } as any,
              ],
            },
            // @ts-expect-error - usedComponents is a proposed schema extension
            usedComponents: [
              'Badge',
              'Box',
              'Button',
              'Checkbox',
              'Clickable',
              'Grid',
              'Image',
              'Link',
              'Section',
              'Stack',
              'Table',
              'TableBody',
              'TableCell',
              'TableHeader',
              'TableHeaderRow',
              'TableRow',
              'Text',
              'TextField',
            ],
          },
          {
            description:
              'Table with pagination controls for navigating large datasets.',
            codeblock: {
              title: 'Index table: Pagination',
              tabs: [
                {
                  title: 'html',
                  code: 'examples/indexTablePagination.html',
                  language: 'html',
                },
                {
                  title: 'jsx',
                  code: 'examples/indexTablePagination.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                } as any,
              ],
            },
            // @ts-expect-error - usedComponents is a proposed schema extension
            usedComponents: [
              'Badge',
              'Box',
              'Button',
              'Grid',
              'Image',
              'Link',
              'Section',
              'Stack',
              'Table',
              'TableBody',
              'TableCell',
              'TableHeader',
              'TableHeaderRow',
              'TableRow',
              'TextField',
            ],
          },
        ],
      },
    ],
  },
  related: [],
};

export default data;
