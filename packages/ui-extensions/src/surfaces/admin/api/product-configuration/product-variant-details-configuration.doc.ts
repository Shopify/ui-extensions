import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Product Variant Details Configuration API',
  description:
    'The Product Variant Details Configuration API lets you [build product configuration extensions for bundles](/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui) that define variant relationships and manage [bundle](/docs/apps/build/product-merchandising/bundles) compositions. Use this API to build configuration interfaces for bundle and component product experiences at the variant level.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [admin block](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/admin-block) component.',
  defaultExample: {
    description:
      'Use the product variant [resource picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to select component variants for a [bundle](/docs/apps/build/product-merchandising/bundles). This example picks product variants, tracks selections, and posts the product variant IDs to configure the bundle.',
    codeblock: {
      title: 'Select product variant components',
      tabs: [
        {
          title: 'jsx',
          code: './examples/select-variant-components.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ProductVariantDetailsConfigurationApi` object provides access to product variant configuration data. Access the following properties on the `ProductVariantDetailsConfigurationApi` object to interact with the current product variant context, navigate within the admin, and select resources in the `admin.product-variant-details.configuration.render` target.',
      type: 'ProductVariantDetailsConfigurationApi',
    },
  ],
  examples: {
    description: 'Configure product variant-level bundles',
    examples: [
      {
        description:
          'Query the parent product ID then launch the variant creation workflow. This example fetches the parent product using GraphQL, passes it as context data to the variant intent, and shows success feedback.',
        codeblock: {
          title: 'Create component variant',
          tabs: [
            {
              title: 'jsx',
              code: './examples/create-variant-component.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Fetch variant bundle data including SKU and display name from metafields. This example queries variant-specific details, parses the component configuration, and displays variant information in the UI.',
        codeblock: {
          title: 'Load variant bundle configuration',
          tabs: [
            {
              title: 'jsx',
              code: './examples/load-variant-bundle-config.jsx',
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
        '- **Store configuration keyed by variant GID:** Save bundle relationships in metafields on the variant or in your app database using the variant GID as the key for precise variant-level configuration.\n' +
        '- **Use `type: "variant"` in Resource Picker for precision:** When selecting component variants, use `type: "variant"` in the [Resource Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) for precise variant selection rather than product-level selection.\n' +
        '- **Implement cart transforms to enforce bundles:** Configuration only defines relationships. Use Shopify Functions [cart transforms](/docs/api/functions/latest/cart-transform) to enforce variant-level bundling at checkout based on saved configuration.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Configuration extensions only render in the admin. They don't affect storefront or checkout behavior. You must implement separate logic for storefront bundle display and checkout enforcement.\n" +
        "- Bundles aren't enforced automatically. Configuration doesn't automatically create bundles. You must implement [cart transforms](/docs/api/functions/latest/cart-transform) to enforce bundling when variants are added to cart.\n" +
        "- Your extension can't directly modify variant properties. The API is read-only for variant data. Use GraphQL mutations like [`productVariantsBulkUpdate`](/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate) if you need to update variants.",
    },
  ],
};

export default data;
