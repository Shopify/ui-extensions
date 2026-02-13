import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Purchase Options Card Configuration API',
  description:
    'The Purchase Options Card Configuration API provides access to purchase option selection data for products with [subscription](/docs/apps/build/purchase-options/subscriptions) and [selling plan](/docs/apps/build/purchase-options/subscriptions/selling-plans) configurations. Use this API to build action extensions that interact with selected [purchase options](/docs/apps/build/purchase-options) on product and product variant details pages.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [AdminAction](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminaction) component.',
  defaultExample: {
    description:
      'Update a subscription by sending product and selling plan IDs to your backend. This example checks for selling plan presence, posts the update request, and shows a success [banner](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/banner) before auto-closing the modal.',
    codeblock: {
      title: 'Manage a subscription',
      tabs: [
        {
          title: 'React',
          code: '../purchase-options-card/examples/manage-subscription.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: '../purchase-options-card/examples/manage-subscription.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `PurchaseOptionsCardConfigurationApi` object provides access to selected purchase option data. Access the following properties on the `PurchaseOptionsCardConfigurationApi` object to interact with currently selected products and selling plans in the `admin.product-purchase-option.action.render` and `admin.product-variant-purchase-option.action.render` targets.',
      type: 'PurchaseOptionsCardConfigurationApi',
    },
  ],
  examples: {
    description: 'Work with purchase options and selling plans',
    examples: [
      {
        description:
          'Show a confirmation step before removing a product from a selling plan. This example demonstrates a two-step flow with a cancel option and success feedback after removal.',
        codeblock: {
          title: 'Remove from selling plan',
          tabs: [
            {
              title: 'React',
              code: '../purchase-options-card/examples/remove-from-plan.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: '../purchase-options-card/examples/remove-from-plan.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Fetch selling plan name and options using the [GraphQL Admin API](/docs/api/admin-graphql) to validate the configuration. This example queries plan details, displays the information, and auto-closes after two seconds.',
        codeblock: {
          title: 'Validate selling plan',
          tabs: [
            {
              title: 'React',
              code: '../purchase-options-card/examples/validate-selling-plan.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: '../purchase-options-card/examples/validate-selling-plan.ts',
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
        '- **Handle operations based on selling plan selection:** Items in `api.data.selected` have an optional `sellingPlanId` property. When present, perform subscription-specific operations. When absent, treat it as a one-time purchase.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The action only appears when selling plan groups exist on the product or variant. The action is hidden for products without subscription options, even if your extension is installed.\n' +
        '- Items in `api.data.selected` have an optional `sellingPlanId` property. When present, the merchant selected a specific selling plan. When absent, they selected the product/variant without a specific plan.\n' +
        "- Your extension can't modify selling plan configurations. The API is read-only for selling plan data. Use GraphQL mutations to update selling plans if needed.\n" +
        '- Selection data only includes IDs. You must query GraphQL for full product, variant, and selling plan details like billing policy and pricing adjustments. Selling plan group data is also unavailable. Your extension only receives individual selling plan IDs but not the parent selling plan group structure.',
    },
  ],
};

export default data;
