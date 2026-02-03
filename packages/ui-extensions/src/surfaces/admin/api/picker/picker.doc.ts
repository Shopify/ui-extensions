import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Picker API',
  overviewPreviewDescription: 'Opens a Picker in your app',
  description: `The Picker API lets merchants search for and select items from your app-specific data, such as product reviews, email templates, or subscription options. Use this API to build custom selection dialogs with your own data structure, badges, and thumbnails. The picker returns the IDs of selected items.

> Tip:
> If you need to pick Shopify products, variants, or collections, use the [Resource Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) instead.`,
  isVisualComponent: true,
  category: 'Target APIs',
  subCategory: 'Utility APIs',
  thumbnail: 'picker.png',
  requires:
    'an Admin UI [block, action, or print](/docs/api/admin-extensions/{API_VERSION}#building-your-extension) extension.',
  defaultExample: {
    description:
      'Build a custom picker for email templates with columns and badges. This example defines table headers (Templates, Created by, Times used), populates picker items with data fields for each column, and adds status badges (Draft/Published) to visually distinguish template states.',
    image: 'picker.png',
    codeblock: {
      title: 'Select email templates',
      tabs: [
        {code: './examples/template-picker.ts', language: 'ts'},
        {code: './examples/template-picker.tsx', language: 'tsx'},
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
  examples: {
    description: 'Picker API patterns',
    examples: [
      {
        description:
          'Create a minimal picker with only required fields (heading and items). Basic picker with two selectable options and no additional configuration.',
        codeblock: {
          title: 'Simple picker',
          tabs: [
            {code: './examples/minimal.ts', language: 'ts'},
            {code: './examples/minimal.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Limit selection to a maximum of 2 items. Sets `multiple: 2` to restrict selection count.',
        codeblock: {
          title: 'Limited selectable items',
          tabs: [
            {code: './examples/multiple-limit.ts', language: 'ts'},
            {code: './examples/multiple-limit.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Allow unlimited selection. Sets `multiple: true` without a numeric limit.',
        codeblock: {
          title: 'Unlimited selectable items',
          tabs: [
            {code: './examples/multiple-true.ts', language: 'ts'},
            {code: './examples/multiple-true.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Open picker with items already preselected. Sets `selected: true` on specific items when the picker opens, though merchants can still deselect them.',
        codeblock: {
          title: 'Preselected items',
          tabs: [
            {code: './examples/preselected.ts', language: 'ts'},
            {code: './examples/preselected.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Disable specific picker items to prevent selection. Sets `disabled: true` on certain items, which causes them to appear but prevents selection.',
        codeblock: {
          title: 'Disabled items',
          tabs: [
            {code: './examples/disabled.ts', language: 'ts'},
            {code: './examples/disabled.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Populate the picker with live GraphQL data. This example uses `useEffect` to fetch orders via the [GraphQL Admin API](/docs/api/admin-graphql), transforms them into picker format, and opens with dynamic data.',
        codeblock: {
          title: 'Use GraphQL data',
          tabs: [
            {code: './examples/direct-api.ts', language: 'ts'},
            {code: './examples/direct-api.tsx', language: 'tsx'},
          ],
        },
      },
    ],
  },
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
