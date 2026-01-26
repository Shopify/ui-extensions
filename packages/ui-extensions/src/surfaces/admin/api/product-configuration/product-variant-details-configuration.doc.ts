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
        'The `ProductVariantDetailsConfigurationApi` object provides access to product variant configuration data and methods. Access these properties through the API to interact with the current product variant context, navigate within the admin, and select resources in the `admin.product-variant-details.configuration.render` target.',
      type: 'ProductVariantDetailsConfigurationApi',
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
        '- **Validate component compatibility:** Ensure component variants are compatible with the parent variant before defining bundle relationships.\n' +
        '- **Show variant details:** Display variant-specific information like SKU, price, and options to help merchants configure appropriate bundle components.\n' +
        '- **Provide clear configuration UI:** Use descriptive labels and previews to help merchants understand variant-level bundle composition.\n' +
        '- **Use resource pickers:** Use the [Resource Picker API](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) to help merchants select component variants for bundle configurations.\n' +
        '- **Save configuration appropriately:** Store bundle composition data in a format that your app backend can use to construct the variant bundle at purchase time.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        'Configuration extensions only define bundle relationships at the variant level in the Shopify admin. Apps must implement the actual bundling logic in checkout using [cart transforms](/docs/api/functions/latest/cart-transform) or other mechanisms.',
    },
  ],
};

export default data;
