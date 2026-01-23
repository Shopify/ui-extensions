import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Resource Picker API',
  overviewPreviewDescription: 'Opens a Resource Picker in your app',
  description: `The Resource Picker API lets merchants search for and select products, collections, or product variants. Use this API when your extension needs merchants to choose Shopify resources to work with. The picker returns detailed resource information including IDs, titles, images, and metadata.

> Tip:
> If you need to pick app-specific resources like product reviews, email templates, or subscription options, use the [Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/picker-api) instead.
`,
  isVisualComponent: true,
  category: 'Target APIs',
  subCategory: 'Utility APIs',
  thumbnail: 'resource-picker.png',
  requires:
    'an Admin UI [block, action, or print](/docs/api/admin-extensions/{API_VERSION}#building-your-extension) extension.',
  defaultExample: {
    image: 'resource-picker.png',
    codeblock: {
      title: 'Product picker',
      tabs: [
        {
          code: './examples/product-picker.js',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: 'Resource Pickers with different options',
    examples: [
      {
        description: 'Alternate resources',
        codeblock: {
          title: 'Alternate resources',
          tabs: [
            {
              title: 'Collection picker',
              code: './examples/collection-picker.js',
              language: 'js',
            },
            {
              title: 'Product variant picker',
              code: './examples/product-variant-picker.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Preselected resources',
        codeblock: {
          title: 'Product picker with preselected resources',
          tabs: [
            {
              code: './examples/selection-ids.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Action verb',
        codeblock: {
          title: 'Product picker with action verb',
          tabs: [
            {
              code: './examples/action.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Multiple selection',
        codeblock: {
          title: 'Product picker with multiple selection',
          tabs: [
            {
              title: 'Unlimited selectable items',
              code: './examples/multiple-unlimited.js',
              language: 'js',
            },
            {
              title: 'Maximum selectable items',
              code: './examples/multiple-limited.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Filters',
        codeblock: {
          title: 'Product picker with filters',
          tabs: [
            {
              code: './examples/filters.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Filter query',
        codeblock: {
          title: 'Product picker with a custom filter query',
          tabs: [
            {
              code: './examples/filter-query.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Selection',
        codeblock: {
          title: 'Product picker using returned selection payload',
          tabs: [
            {
              code: './examples/selection.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Initial query',
        codeblock: {
          title: 'Product picker with initial query provided',
          tabs: [
            {
              code: './examples/query.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  definitions: [
    {
      title: 'ResourcePickerOptions',
      description: `The \`ResourcePickerOptions\` object defines how the resource picker behaves, including which resource type to display, selection limits, filters, and preselected items.`,
      type: 'ResourcePickerOptions',
    },
    {
      title: 'ResourcePicker return payload',
      description: `The resource picker returns an array of selected resources when the merchant confirms their selection, or \`undefined\` if they cancel. The resource structure in the array varies based on the \`type\` option: products include variants and images, collections include rule sets, and variants include pricing and inventory data.`,
      type: 'SelectPayload',
    },
  ],
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Choose the right resource type:** Use `product` for selecting items with variants, `variant` for specific SKUs, and `collection` for product groups.\n' +
        '- **Use appropriate action verbs:** Set `action` to `add` for adding new items or `select` for choosing existing items to match the workflow context.\n' +
        '- **Apply filters to narrow results:** Use the `filter` option to restrict resources by publication status, variants visibility, or custom search criteria to help merchants find relevant items faster.\n' +
        '- **Set sensible selection limits:** Use appropriate `multiple` values to match your use case—single selection for unique choices or multiple selection with limits for batch operations.\n' +
        '- **Handle cancellation gracefully:** Check if the returned value is `undefined` (indicating cancellation) and handle this case appropriately in your workflow.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The Resource Picker API only supports products, variants, and collections. For app-specific data like templates or custom options, use the [Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/picker-api) instead.\n' +
        '- When `type` is `product` and `multiple` is `false`, merchants can still select multiple variants from a single product.',
    },
  ],
};

export default data;
