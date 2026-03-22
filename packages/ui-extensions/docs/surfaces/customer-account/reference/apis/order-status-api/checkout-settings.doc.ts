import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkout Settings API',
  description:
    "The Checkout Settings API provides read-only access to the merchant's checkout configuration that was active when the buyer placed the order on the order status page. Use this API to detect the order submission type, display B2B payment terms, and check shipping address editability.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the checkout settings. Access the following property on the `OrderStatusApi` object to read the checkout configuration for the order.',
      type: 'Docs_OrderStatus_CheckoutSettingsApi',
    },
  ],
  defaultExample: {
    description:
      'Determine whether the order is a standard order or a draft order. This example reads `shopify.checkoutSettings.orderSubmission` and displays a different label depending on the value.',
    codeblock: {
      title: 'Detect the order type',
      tabs: [
        {
          code: '../../examples/apis/checkout-settings-order-type.example.jsx',
          language: 'jsx',
          title: 'jsx',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Show B2B payment terms including the terms name and due date. This example reads `shopify.checkoutSettings.paymentTermsTemplate` and renders the payment details when configured.',
        codeblock: {
          title: 'Display B2B payment terms',
          tabs: [
            {
              code: '../../examples/apis/checkout-settings-payment-terms.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Determine whether the buyer was able to modify their shipping address during checkout. This example reads `shopify.checkoutSettings.shippingAddress.isEditable` and conditionally shows an edit button.',
        codeblock: {
          title: 'Check shipping address editability',
          tabs: [
            {
              code: '../../examples/apis/checkout-settings-shipping.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Adapt messaging for draft orders**: When `orderSubmission` is `DRAFT_ORDER`, the order hasn't been finalized by the merchant yet. Consider adjusting your extension's messaging to indicate that the order is pending review.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Checkout settings reflect the merchant's configuration at the time of checkout. If the merchant updates their checkout settings after the order is placed, the values returned by this API don't change.",
    },
  ],
  related: [],
};

export default data;
