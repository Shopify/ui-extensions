import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Index table',
  isOneColumnLayout: true,
  overviewPreviewDescription:
    'Display and manage data with powerful table interactions.',
  description: `An index table displays a collection of similar objects—like products, orders, or customers—giving merchants an at-a-glance view to browse, search, and take action. Built on the [Table](/docs/api/app-home/polaris-web-components/structure/table) component with [Checkbox](/docs/api/app-home/polaris-web-components/forms/checkbox) for bulk selection, it's the primary way to present lists of resources.

  This pattern is a recommended design for apps in the [Built for Shopify](/docs/apps/launch/built-for-shopify/requirements) program. See [Best practices](#best-practices) below for more details.

  #### Use cases

  - Product inventory: Browsing and managing product listings, stock levels, variants
  - Order management: Viewing orders, filtering by status, processing fulfillments
  - Customer lists: Searching customers, viewing segments, managing profiles
  - Discount codes: Listing promotions, activating/deactivating campaigns
  `,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/indexTable.png',
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `Following these best practices ensures a consistent merchant experience and satisfies [Built for Shopify](/docs/apps/launch/built-for-shopify/requirements) requirements:

- [**4.1.1 Follow UX best practices**](/docs/apps/launch/built-for-shopify/requirements#follow-ux-best-practices): Tables should look and behave like the Shopify admin with consistent spacing and card containers
- [**4.1.2 Mobile-friendly**](/docs/apps/launch/built-for-shopify/requirements#mobile-friendly): Content must not require horizontal scrolling; columns should stack or collapse appropriately
- [**4.1.6 Use modals appropriately**](/docs/apps/launch/built-for-shopify/requirements#use-modals-appropriately): Destructive bulk actions (like Delete) should use [Modal](/docs/api/app-home/apis/modal) confirmations
- [**4.2.5 Guide merchants to logical actions**](/docs/apps/launch/built-for-shopify/requirements#guide-merchants-to-logical-actions): When presenting bulk actions, the most logical action should appear visually dominant`,
      sectionSubContent: [
        {
          title: 'APIs and components',
          sectionContent: `- Use [\`s-page\`](/docs/api/app-home/polaris-web-components/structure/page) for page structure and primary actions (like "Create new")
- Use [Toast](/docs/api/app-home/apis/toast) for feedback after bulk actions
- Use [Navigation API](/docs/api/app-home/apis/navigation) for row click navigation to detail pages`,
        },
        {
          title: 'Table structure',
          sectionContent: `- Use clear, descriptive column headers that help merchants understand the data at a glance.
- Include a primary identifier column (like name or ID) as the first column.
- Limit visible columns to essential information; use progressive disclosure for additional details.
- Provide sorting on relevant columns when the data set is large.`,
        },
        {
          title: 'Bulk actions',
          sectionContent: `- Place bulk action buttons in a consistent location above or below the table.
- Disable bulk actions when no items are selected.
- Show a count of selected items when bulk selection is active.
- Confirm destructive bulk actions (like Delete) with a modal before executing.`,
        },
        {
          title: 'Filtering and search',
          sectionContent: `- Provide search functionality for large data sets.
- Use filters to help merchants narrow down results by status, date, or other relevant attributes.
- Show active filters clearly and make them easy to remove.
- Preserve filter and search state when navigating away and returning.`,
        },
      ],
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
        },
      ],
    },
    // @ts-expect-error - usedComponents is a proposed schema extension
    usedComponents: [
      'Section',
      'Table',
      'Grid',
      'TextField',
      'Button',
      'Popover',
      'ChoiceList',
      'Checkbox',
      'Badge',
      'Link',
    ],
  },
};

export default data;
