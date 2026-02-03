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
    description:
      'Calls `resourcePicker()` with `type: "product"` and returns selected products with their IDs, titles, and images. Basic product selection without filters.',
    image: 'resource-picker.png',
    codeblock: {
      title: 'Select products',
      tabs: [
        {code: './examples/product-picker.ts', language: 'ts'},
        {code: './examples/product-picker.tsx', language: 'tsx'},
      ],
    },
  },
  examples: {
    description: 'Resource Picker API patterns',
    examples: [
      {
        description:
          'Select collections or product variants instead of products. Use `type: "collection"` to pick collections or `type: "variant"` for variants, each returning different data structures with type-specific metadata.',
        codeblock: {
          title: 'Select alternate resource types',
          tabs: [
            {
              title: 'Collection picker',
              code: './examples/collection-picker.ts',
              language: 'ts',
            },
            {
              title: 'Collection picker',
              code: './examples/collection-picker.tsx',
              language: 'tsx',
            },
            {
              title: 'Variant picker',
              code: './examples/product-variant-picker.ts',
              language: 'ts',
            },
            {
              title: 'Variant picker',
              code: './examples/product-variant-picker.tsx',
              language: 'tsx',
            },
          ],
        },
      },
      {
        description:
          'Open the picker with specific products already preselected. Uses `selectionIds` array with product GIDs like `gid://shopify/Product/123` to mark items as selected—useful for edit workflows where you need to show existing selections.',
        codeblock: {
          title: 'Preselect resources',
          tabs: [
            {code: './examples/selection-ids.ts', language: 'ts'},
            {code: './examples/selection-ids.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Customize the picker\'s confirm button with an action verb. Sets `action: "add"` to change button text from "Select" to "Add", helping merchants understand whether they\'re adding to a list or replacing a selection.',
        codeblock: {
          title: 'Set action verb',
          tabs: [
            {code: './examples/action.ts', language: 'ts'},
            {code: './examples/action.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Allow unlimited selection or limit to a maximum count. Set `multiple: true` for unlimited or `multiple: 5` to cap at 5 items, with the picker automatically preventing selection beyond the limit.',
        codeblock: {
          title: 'Configure multiple selection',
          tabs: [
            {
              title: 'Unlimited',
              code: './examples/multiple-unlimited.ts',
              language: 'ts',
            },
            {
              title: 'Unlimited',
              code: './examples/multiple-unlimited.tsx',
              language: 'tsx',
            },
            {
              title: 'Limited',
              code: './examples/multiple-limited.ts',
              language: 'ts',
            },
            {
              title: 'Limited',
              code: './examples/multiple-limited.tsx',
              language: 'tsx',
            },
          ],
        },
      },
      {
        description:
          'Filter the picker to show only published products. Uses `filter.published_status: "published"` to restrict the picker to live, customer-visible products, preventing accidental selection of draft or archived items.',
        codeblock: {
          title: 'Apply filters',
          tabs: [
            {code: './examples/filters.ts', language: 'ts'},
            {code: './examples/filters.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Provide an initial search query to filter picker results. Uses `query` property to pre-fill the search field with a term like "shirt", so the picker opens with results already filtered—helpful for guiding merchants to specific items in large catalogs.',
        codeblock: {
          title: 'Search with initial query',
          tabs: [
            {code: './examples/query.ts', language: 'ts'},
            {code: './examples/query.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Access selected resource data including IDs, titles, and images. Resource picker returns an array of resources with full metadata for use in your extension, or `undefined` if the merchant cancels.',
        codeblock: {
          title: 'Use selection payload',
          tabs: [
            {code: './examples/selection.ts', language: 'ts'},
            {code: './examples/selection.tsx', language: 'tsx'},
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
