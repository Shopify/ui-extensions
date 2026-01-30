import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Purchase Options Card Configuration API',
  description:
    'This API is available to action extensions that render in the purchase options card on product and product variant details pages when selling plan groups are present.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Manage subscription settings for products with selling plans. Access both product ID and selling plan ID to update subscription configurations.',
    codeblock: {
      title: 'Manage subscription',
      tabs: [
        {
          code: './purchase-options-card/examples/manage-subscription.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'PurchaseOptionsCardConfigurationApi',
      description: '',
      type: 'PurchaseOptionsCardConfigurationApi',
    },
  ],
  examples: {
    description: 'Work with purchase options and selling plans',
    examples: [
      {
        description:
          'Query selling plan details using the [GraphQL Admin API](/docs/api/admin-graphql). Fetch selling plan configuration to validate settings or display plan information.',
        codeblock: {
          title: 'Validate selling plan',
          tabs: [
            {
              code: './purchase-options-card/examples/validate-selling-plan.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Remove products from selling plans with merchant confirmation. Handle product removal from subscription configurations safely.',
        codeblock: {
          title: 'Remove from selling plan',
          tabs: [
            {
              code: './purchase-options-card/examples/remove-from-plan.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
};

export default data;
