import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Product Details Configuration API',
  description:
    'The Product Details Configuration API lets you [build product configuration extensions for bundles](/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui) that define product relationships and manage [bundle](/docs/apps/build/product-merchandising/bundles) compositions. Use this API to build configuration interfaces for bundle and component product experiences.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminBlock`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminblock) component.',
  definitions: [
    {
      title: 'ProductDetailsConfigurationApi',
      description:
        'The `ProductDetailsConfigurationApi` object provides access to product configuration data and methods. Access the following properties on the `ProductDetailsConfigurationApi` object to interact with the current product context, navigate within the admin, and select resources in the `admin.product-details.configuration.render` target.',
      type: 'ProductDetailsConfigurationApi',
    },
  ],
  defaultExample: {
    description:
      'Opens `resourcePicker()` with `multiple: 5` to select up to 5 bundle components, filtering out hidden, draft, and archived products. Posts the selected IDs to your backend to save the configuration.',
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
  examples: {
    description: 'Configure product bundles',
    examples: [
      {
        description:
          'Uses `useEffect` to query the [GraphQL Admin API](/docs/api/admin-graphql) and fetch the bundle metafield, then parses the JSON components array. For displaying existing bundle configurations.',
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
