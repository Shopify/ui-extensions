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
    image: 'picker.png',
    codeblock: {
      title: 'Picker',
      tabs: [
        {
          code: './examples/template-picker.js',
          language: 'js',
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
  examples: {
    description: 'Pickers with different options',
    examples: [
      {
        description:
          "Minimal required fields picker configuration.\n\nIf you don't provide the required options (`heading` and `items`), the picker will not open and an error will be logged.",
        codeblock: {
          title: 'Simple picker',
          tabs: [
            {
              code: './examples/minimal.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Setting a specific number of selectable items. In this example, the user can select up to 2 items.',
        codeblock: {
          title: 'Limited selectable items',
          tabs: [
            {
              code: './examples/multiple-limit.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Setting an unlimited number of selectable items.',
        codeblock: {
          title: 'Unlimited selectable items',
          tabs: [
            {
              code: './examples/multiple-true.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Providing preselected items in the picker. These will be selected when the picker opens but can be deselected by the user.',
        codeblock: {
          title: 'Preselected items',
          tabs: [
            {
              code: './examples/preselected.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          "Providing disabled items in the picker. These will be disabled and can't be selected by the user.",
        codeblock: {
          title: 'Disabled items',
          tabs: [
            {
              code: './examples/disabled.js',
              language: 'js',
            },
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
        '- **Use clear, descriptive headings:** Choose picker titles that clearly explain what merchants are selecting to reduce confusion.\n' +
        '- **Provide meaningful item data:** Include relevant information in item headings and data columns to help merchants make informed selections.\n' +
        '- **Use badges appropriately:** Add status badges to highlight item states, completion levels, or important attributes that affect selection.\n' +
        '- **Include thumbnails for visual items:** Add preview images to help merchants visually identify items, especially for templates, designs, or products.\n' +
        '- **Set sensible selection limits:** Use appropriate `multiple` values to match your use case—single selection for unique choices, limited selection for constrained scenarios, or unlimited for flexible selection.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        'The Picker API is designed for app-specific data. For selecting Shopify products, variants, or collections, use the [Resource Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) instead.',
    },
  ],
};

export default data;
