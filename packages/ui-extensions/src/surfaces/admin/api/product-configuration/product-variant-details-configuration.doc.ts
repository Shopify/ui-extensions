import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Product Variant Details Configuration API',
  description:
    'The Product Variant Details Configuration API lets you [build product configuration extensions for bundles](/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui) that define variant relationships and manage [bundle](/docs/apps/build/product-merchandising/bundles) compositions. Use this API to build configuration interfaces for bundle and component product experiences at the variant level.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminBlock`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminblock) component.',
  definitions: [
    {
      title: 'ProductVariantDetailsConfigurationApi',
      description:
        'The `ProductVariantDetailsConfigurationApi` object provides access to product variant configuration data and methods. Access the following properties on the `ProductVariantDetailsConfigurationApi` object to interact with the current product variant context, navigate within the admin, and select resources in the `admin.product-variant-details.configuration.render` target.',
      type: 'ProductVariantDetailsConfigurationApi',
    },
  ],
  defaultExample: {
    description:
      'Select component variants for a bundle using the variant resource picker. This example opens `resourcePicker` with `type: "variant"` to allow variant-level selection, and posts the selected variant IDs to your backend to configure the bundle.',
    codeblock: {
      title: 'Select variant components',
      tabs: [
        {code: './examples/select-variant-components.ts', language: 'ts'},
        {code: './examples/select-variant-components.tsx', language: 'tsx'},
      ],
    },
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
