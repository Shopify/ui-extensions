import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Product Details Configuration API',
  description:
    'The Product Details Configuration API lets you [build product configuration extensions for bundles](/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui) that define product relationships and manage [bundle](/docs/apps/build/product-merchandising/bundles) compositions. Use this API to build configuration interfaces for bundle and component product experiences.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [admin block](/docs/api/admin-extensions/{API_VERSION}/web-components/settings-and-templates/admin-block) component.',
  defaultExample: {
    description:
      'Open the product [resource picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to select up to five components for a [bundle](/docs/apps/build/product-merchandising/bundles). This example filters out draft and archived products, saves the bundle configuration to your backend, and tracks the selection count.',
    codeblock: {
      title: 'Select bundle components',
      tabs: [
        {
          title: 'jsx',
          code: './examples/select-bundle-components.jsx',
          language: 'jsx',
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
          "Query a product's bundle metafield and parse the JSON components array. This example fetches bundle data in `useEffect`, parses the stored configuration, and displays the component count.",
        codeblock: {
          title: 'Load bundle configuration',
          tabs: [
            {
              title: 'jsx',
              code: './examples/load-bundle-config.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Launch the product creation workflow using [intents](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/intents-api) and capture the new product ID. This example invokes the `create` intent, waits for completion, and displays the created product ID from the response data.',
        codeblock: {
          title: 'Create bundle component',
          tabs: [
            {
              title: 'jsx',
              code: './examples/navigate-to-component.jsx',
              language: 'jsx',
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
        '- **Design for products with multiple variants:** Products in `api.data.selected` may have multiple variants. Design your bundle configuration to either apply to all variants or allow variant-level configuration.\n' +
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
