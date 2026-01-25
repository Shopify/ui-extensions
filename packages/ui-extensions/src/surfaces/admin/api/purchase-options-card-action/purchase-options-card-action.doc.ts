import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Purchase Options Card Configuration API',
  description:
    'The Purchase Options Card Configuration API provides access to purchase option selection data for products with [subscription](/docs/apps/build/purchase-options/subscriptions) and [selling plan](/docs/apps/build/purchase-options/subscriptions/selling-plans) configurations. Use this API to build action extensions that interact with selected [purchase options](/docs/apps/build/purchase-options) on product and product variant details pages.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminAction`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminaction) component.',
  definitions: [
    {
      title: 'PurchaseOptionsCardConfigurationApi',
      description:
        'The `PurchaseOptionsCardConfigurationApi` object provides access to selected purchase option data. Access these properties through the API to interact with currently selected products and selling plans in the `admin.product-purchase-option.action.render` and `admin.product-variant-purchase-option.action.render` targets.',
      type: 'PurchaseOptionsCardConfigurationApi',
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
        '- **Validate selling plan data:** Check that `sellingPlanId` is present when working with subscription products before performing operations.\n' +
        '- **Handle both product and variant selections:** Account for both product-level and variant-level selections in your action logic.\n' +
        '- **Provide clear action names:** Use descriptive titles that explain what the action does with purchase options to help merchants understand the workflow.\n' +
        '- **Handle modal state appropriately:** Use `api.close()` to dismiss the modal when tasks complete or when merchants cancel operations.\n' +
        '- **Display subscription context:** Show selling plan information to help merchants understand which subscription options are affected.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Purchase option actions only appear when a selling plan group is present on the product or variant.\n' +
        "- Direct modification of selling plan configurations isn't supported.",
    },
  ],
};

export default data;
