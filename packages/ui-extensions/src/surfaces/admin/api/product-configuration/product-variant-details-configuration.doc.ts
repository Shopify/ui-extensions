import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Product Variant Details Configuration API',
  description:
    'The Product Variant Details Configuration API lets you [build product configuration extensions for bundles](/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui) that define variant relationships and manage [bundle](/docs/apps/build/product-merchandising/bundles) compositions. Use this API to build configuration interfaces for bundle and component product experiences at the variant level.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminBlock`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminblock) component.',
  defaultExample: {
    description:
      'Fetch variant [bundle](/docs/apps/build/product-merchandising/bundles) data including SKU and display name from metafields. This example queries variant-specific details using the [GraphQL Admin API](/docs/api/admin-graphql/), parses the component configuration, and displays variant information.',
    codeblock: {
      title: 'Load variant bundle configuration',
      tabs: [
        {
          title: 'React',
          code: './examples/load-variant-bundle-config.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/load-variant-bundle-config.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ProductVariantDetailsConfigurationApi` object provides access to product variant configuration data and methods. Access the following properties on the `ProductVariantDetailsConfigurationApi` object to interact with the current product variant context, navigate within the admin, and select resources in the `admin.product-variant-details.configuration.render` target.',
      type: 'ProductVariantDetailsConfigurationApi',
    },
  ],
  examples: {
    description: 'Configure product variant-level bundles',
    examples: [
      {
        description:
          'Display variant pricing, SKU, and inventory to provide context during bundle configuration. This example queries variant details using the [GraphQL Admin API](/docs/api/admin-graphql/) and renders them.',
        codeblock: {
          title: 'Display variant details',
          tabs: [
            {
              title: 'React',
              code: './examples/display-variant-details.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/display-variant-details.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Navigate to the parent product from variant configuration to view full product context. This example queries the parent product ID using the [GraphQL Admin API](/docs/api/admin-graphql/), displays the parent product title, and provides a navigation button to open the product details page.',
        codeblock: {
          title: 'Navigate to parent product',
          tabs: [
            {
              title: 'React',
              code: './examples/navigate-to-parent-product.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/navigate-to-parent-product.ts',
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
        '- **Store configuration keyed by variant GID:** Save bundle relationships in metafields on the variant or in your app database using the variant GID as the key for precise variant-level configuration.\n' +
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
