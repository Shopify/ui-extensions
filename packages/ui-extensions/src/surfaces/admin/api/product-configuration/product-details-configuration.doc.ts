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
        'The `ProductDetailsConfigurationApi` object provides access to product configuration data and methods. Access these properties through the API to interact with the current product context, navigate within the admin, and select resources in the `admin.product-details.configuration.render` target.',
      type: 'ProductDetailsConfigurationApi',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Validate product relationships:** Ensure component products are compatible and available before defining bundle relationships.\n' +
        '- **Handle variant complexity:** Account for products with multiple variants when configuring bundle components.\n' +
        '- **Provide clear configuration UI:** Use descriptive labels and previews to help merchants understand bundle composition.\n' +
        '- **Use resource pickers:** Use the [Resource Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to help merchants select component products for bundle configurations.\n' +
        '- **Save configuration appropriately:** Store bundle composition data in a format that your app backend can use to construct the bundle at purchase time.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        'Configuration extensions only define bundle relationships in the Shopify admin. Apps must implement the actual bundling logic in checkout using [cart transforms](/docs/api/functions/latest/cart-transform) or other mechanisms.',
    },
  ],
};

export default data;
