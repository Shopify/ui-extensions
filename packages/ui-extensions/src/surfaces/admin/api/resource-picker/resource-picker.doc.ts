import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Resource Picker API',
  overviewPreviewDescription: 'Opens a Resource Picker in your app',
  description: `The Resource Picker API lets merchants search for and select products, collections, or product variants. Use this API when your extension needs merchants to choose Shopify resources to work with. The resource picker returns detailed resource information including IDs, titles, images, and metadata.

> Tip:
> If you need to pick app-specific resources like product reviews, email templates, or subscription options, use the [Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/picker-api) instead.
`,
  isVisualComponent: true,
  examples: {
    description:
      'Examples that demonstrate how to use the Resource Picker API.',
    examples: [
      {
        description:
          'Filter the picker to show only published products using the `filter` option with `published_status: "published"`. This example shows restricting the picker to live, customer-visible products. Use this for promotional campaigns, product recommendations, or any feature that should only work with active inventory, preventing accidental selection of draft or archived products.',
        codeblock: {
          title: 'Filter to published products',
          tabs: [
            {
              title: 'React',
              code: './examples/filters.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/filters.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Limit selection to a maximum of five products by setting `multiple: 5`. This example shows restricting how many products merchants can choose. This is useful for bundle builders with item limits, featured product sections with fixed display slots, or promotional campaigns with maximum product counts. The resource picker automatically prevents selection beyond the limit.',
        codeblock: {
          title: 'Limit selection count',
          tabs: [
            {
              title: 'React',
              code: './examples/multiple-limited.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/multiple-limited.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Open the resource picker with products already selected by passing GIDs to the `selectionIds` option. This example shows pre-populating the resource picker with current selections for edit workflows. Use this for showing what products are already in a bundle, collection, or promotional set. Merchants can see current selections and modify them by adding or removing products before confirming.',
        codeblock: {
          title: 'Preselect products',
          tabs: [
            {
              title: 'React',
              code: './examples/selection-ids.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/selection-ids.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Select collections instead of individual products by setting `type: "collection"`. This example shows switching the resource picker to collection mode for choosing product groupings. This is useful for homepage featured collection carousels, navigation menu builders, bulk collection operations, or promotional campaigns targeting entire product categories rather than individual items.',
        codeblock: {
          title: 'Select collections',
          tabs: [
            {
              title: 'React',
              code: './examples/collection-picker.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/collection-picker.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Allow unlimited product selection by setting `multiple: true` without a numeric limit. This example shows enabling multi-selection where merchants control the quantity. Use this for mass product taggers, bulk inventory tools, category managers, or export utilities where selection count depends on merchant needs without artificial constraints.',
        codeblock: {
          title: 'Select unlimited products',
          tabs: [
            {
              title: 'React',
              code: './examples/multiple-unlimited.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/multiple-unlimited.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Select specific product variants instead of entire products by setting `type: "variant"`. This example shows switching to variant-level selection for choosing individual SKUs. Use this for inventory transfer tools, variant-specific promotions, wholesale pricing sheets, or shipment builders where you need granular control over size, color, and individual SKU tracking.',
        codeblock: {
          title: 'Select product variants',
          tabs: [
            {
              title: 'React',
              code: './examples/product-variant-picker.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/product-variant-picker.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Customize the resource picker button text by setting the `action` option to "add" or "select". This example shows changing the action verb to provide workflow context. "Add" suggests appending to an existing list, while "select" implies choosing for a specific purpose or replacing selections. This subtle language difference improves clarity for different workflow contexts.',
        codeblock: {
          title: 'Set action verb',
          tabs: [
            {
              title: 'React',
              code: './examples/action.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/action.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Start the resource picker with a pre-filled search query by passing the `query` option. This example shows initializing the picker with a search term already entered. This is helpful when you know what merchants are likely looking for, such as products from a specific vendor, tag, or product type. Merchants can modify the query, but starting with relevant results saves time in large catalogs.',
        codeblock: {
          title: 'Start with search query',
          tabs: [
            {
              title: 'React',
              code: './examples/query.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/query.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Utility APIs',
  thumbnail: 'resource-picker.png',
  requires:
    'an admin UI [block, action, or print](/docs/api/admin-extensions/{API_VERSION}#building-your-extension) extension.',
  defaultExample: {
    description:
      'Open the product resource picker to select items from the store catalog. This example invokes `shopify.resourcePicker` with `type: "product"`, handles the async selection, and displays the count of selected products. When merchants confirm their selection, the resource picker returns an array of product objects with GIDs, titles, and handles for use in your extension.',
    image: 'resource-picker.png',
    codeblock: {
      title: 'Select products',
      tabs: [
        {
          title: 'React',
          code: './examples/product-picker.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/product-picker.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
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
