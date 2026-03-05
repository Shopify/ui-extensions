import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Picker API',
  overviewPreviewDescription: 'Opens a Picker in your app',
  description: `The Picker API lets merchants search for and select items from your app-specific data, such as product reviews, email templates, or subscription options. Use this API to build custom selection dialogs with your own data structure, badges, and thumbnails. The picker returns the IDs of selected items.

> Tip:
> If you need to pick Shopify products, variants, or collections, use the [Resource Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) instead.`,
  isVisualComponent: true,
  examples: {
    description: 'Examples that demonstrate how to use the Picker API.',
    examples: [
      {
        description:
          'Disable specific picker items to prevent selection while keeping them visible for context. This example shows setting `disabled: true` on individual items to mark them as non-selectable. This is useful for showing all available options while preventing selection of incompatible resources, templates currently being edited by others, or deprecated features that require upgrades.',
        codeblock: {
          title: 'Disable specific items',
          tabs: [
            {
              title: 'React',
              code: './examples/disabled.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/disabled.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Limit selection to a maximum number of items by setting `multiple: 2` in the picker options. This example shows restricting selection to exactly 2 items. Use this when your feature has hard constraints, such as A/B test variants needing exactly two options, comparison views with fixed slots, or integration mappings that support a specific connection count.',
        codeblock: {
          title: 'Limit selection count',
          tabs: [
            {
              title: 'React',
              code: './examples/multiple-limit.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/multiple-limit.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Open the picker with items already selected by setting `selected: true` on individual items. This example shows pre-marking items as selected when the picker opens. Use this for edit workflows where you need to show what resources are already associated with a configuration, such as automation rule triggers or notification recipients. Merchants can modify the selection before confirming.',
        codeblock: {
          title: 'Preselect items',
          tabs: [
            {
              title: 'React',
              code: './examples/preselected.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/preselected.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Allow unlimited selection by setting `multiple: true` without a numeric limit. This example shows enabling multi-selection where merchants control how many items to choose. This is useful for bulk operations, mass notification sending, export tools, or tag management where selection quantity depends on merchant needs without artificial constraints.',
        codeblock: {
          title: 'Select unlimited items',
          tabs: [
            {
              title: 'React',
              code: './examples/multiple-true.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/multiple-true.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          "Populate the picker with data from the [GraphQL Admin API](/docs/api/admin-graphql). This example fetches order data when the button is clicked, maps results to picker items, and opens the picker with the returned data. Use this pattern for Shopify data that isn't available through the Resource Picker API, such as orders, draft orders, or fulfillments.",
        codeblock: {
          title: 'Use GraphQL data',
          tabs: [
            {
              title: 'React',
              code: './examples/direct-api.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/direct-api.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Utility APIs',
  thumbnail: 'picker.png',
  requires:
    'an admin UI [block, action, or print](/docs/api/admin-extensions/{API_VERSION}#building-your-extension) extension.',
  defaultExample: {
    description:
      'Build a custom picker for email templates with multiple columns and status badges. This example shows defining column headers, populating items with searchable data fields, adding visual status indicators, and handling the selection promise. Use this pattern for app-specific resources like templates, product reviews, or subscription options where you need custom data structures beyond standard Shopify resources.',
    image: 'picker.png',
    codeblock: {
      title: 'Select email templates',
      tabs: [
        {
          title: 'React',
          code: './examples/template-picker.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/template-picker.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'picker',
      description: `The \`picker\` function opens a custom selection dialog with your app-specific data. It accepts configuration options to define the picker's heading, items, headers, and selection behavior. It returns a Promise that resolves to a \`Picker\` object with a \`selected\` property for accessing the merchant's selection.`,
      type: 'PickerApi',
    },
  ],
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Handle undefined return on cancellation:** When merchants cancel or close the picker, it returns `undefined` rather than an empty array. Check for `undefined` explicitly to distinguish cancellation from empty selection.\n' +
        "- **Disable items to prevent modification:** Use the `disabled` property on items combined with `selected: true` to create preselected items that merchants can't deselect.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The Picker API only supports app-specific data. It can't display Shopify resources like products or variants. Use [Resource Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) for Shopify resources.\n" +
        "- Picker items don't support hierarchical or nested structures. All items appear in a flat list.\n" +
        "- The picker can't be customized with additional filters, search operators, or sorting beyond what merchants type in the search field.",
    },
  ],
};

export default data;
