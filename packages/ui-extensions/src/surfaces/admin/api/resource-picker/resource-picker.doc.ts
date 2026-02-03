import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Resource Picker API',
  overviewPreviewDescription: 'Opens a Resource Picker in your app',
  description: `The Resource Picker API lets merchants search for and select products, collections, or product variants. Use this API when your extension needs merchants to choose Shopify resources to work with. The resource picker returns detailed resource information including IDs, titles, images, and metadata.

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
      description: `The \`ResourcePickerOptions\` object defines how the resource picker behaves, including which resource type to display, selection limits, filters, and preselected items. Access the following properties on the \`ResourcePickerOptions\` object to configure the resource picker's appearance and functionality.`,
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
        "- **Filter query runs server-side:** The `query` property in filters isn't visible to merchants and runs as a GraphQL search query. Use it to programmatically restrict results (for example, `vendor:Acme`) without exposing the filter logic.\n" +
        '- **Handle undefined return on cancellation:** When merchants close the picker without selecting, it returns `undefined` rather than an empty array. Check for `undefined` explicitly.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Only products, variants, and collections are supported. Other resource types like customers, orders, or locations can't be selected. Use the [Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/picker-api) for custom resources.\n" +
        "- Product selection with `multiple: false` doesn't prevent multi-variant selection from the same product. Merchants can select multiple variants from a single product even when `multiple: false`.\n" +
        "- Filter options are limited to predefined fields (`hidden`, `variants`, `draft`, `archived`, `query`). Custom filter criteria beyond these aren't supported.\n" +
        '- Returned data structure varies by resource type. Products include a `variants` array, variants include `price` and `inventoryQuantity`, and collections include `ruleSet`.',
    },
  ],
};

export default data;
