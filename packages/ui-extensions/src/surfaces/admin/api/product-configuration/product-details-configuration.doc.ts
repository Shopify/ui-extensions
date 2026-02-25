import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Product Details Configuration API',
  description:
    'The Product Details Configuration API lets you [build product configuration extensions for bundles](/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui) that define product relationships and manage [bundle](/docs/apps/build/product-merchandising/bundles) compositions. Use this API to build configuration interfaces for bundle and component product experiences.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [AdminBlock](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminblock) component.',
  defaultExample: {
    description:
      'Open the product [resource picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to select up to five components for a [bundle](/docs/apps/build/product-merchandising/bundles). This example filters out draft and archived products, saves the bundle configuration to your backend, and tracks the selection count.',
    codeblock: {
      title: 'Select bundle components',
      tabs: [
        {
          title: 'React',
          code: './examples/select-bundle-components.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/select-bundle-components.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ProductDetailsConfigurationApi` object provides access to product configuration data. Access the following properties on the `ProductDetailsConfigurationApi` object to interact with the current product context, navigate within the admin, and select resources in the `admin.product-details.configuration.render` target.',
      type: 'ProductDetailsConfigurationApi',
    },
  ],
  examples: {
    description: 'Configure product bundles',
    examples: [
      {
        description:
          "Query a product's [bundle](/docs/apps/build/product-merchandising/bundles) metafield and parse the JSON components array. This example fetches bundle data using the [GraphQL Admin API](/docs/api/admin-graphql/), parses the stored configuration, and displays the component count.",
        codeblock: {
          title: 'Load bundle configuration',
          tabs: [
            {
              title: 'React',
              code: './examples/load-bundle-config.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/load-bundle-config.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Save bundle display name and metadata using GraphQL mutations. This example uses a [text field](/docs/api/admin-extensions/{API_VERSION}/components/forms/textfield) for input, calls `productUpdate` to save the metafield, and shows confirmation feedback.',
        codeblock: {
          title: 'Update bundle metadata',
          tabs: [
            {
              title: 'React',
              code: './examples/update-bundle-metadata.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/update-bundle-metadata.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Design for products with multiple variants:** Products in `api.data.selected` might have multiple variants. Design your bundle configuration to either apply to all variants or allow variant-level configuration.\n' +
        '- **Use the Resource Picker to select components:** Use the [Resource Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to let merchants select component products for bundle configurations.\n' +
        '- **Implement cart transforms to enforce bundles:** Configuration only defines relationships in admin. Use Shopify Functions [cart transforms](/docs/api/functions/latest/cart-transform) to actually bundle products at checkout based on your saved configuration.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Configuration extensions only render in the admin. They don't affect storefront display or checkout behavior. You must implement storefront and checkout logic separately.\n" +
        "- Bundles aren't enforced automatically. Saving configuration doesn't automatically create bundles. You must implement [cart transforms](/docs/api/functions/latest/cart-transform) or other mechanisms to enforce bundling at purchase time.\n" +
        "- Your extension can't directly modify product properties. The API is read-only for product data. Use GraphQL mutations like [`productUpdate`](/docs/api/admin-graphql/latest/mutations/productUpdate) to update products if needed.",
    },
  ],
};

export default data;
