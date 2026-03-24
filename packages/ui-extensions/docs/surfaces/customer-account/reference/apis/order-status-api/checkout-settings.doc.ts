import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkout Settings API',
  description:
    "The Checkout Settings API provides the merchant's checkout configuration that was active when the buyer placed the order. Use this API to check the order type, payment terms, or shipping address settings.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    description:
      'Read the checkout settings and display whether the order is a standard order or a draft order. This example uses the `useCheckoutSettings` hook to check the `orderSubmission` property.',
    codeblock: {
      title: 'Display order type',
      tabs: [
        {
          code: '../../examples/apis/checkout-settings-display-order-type.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/checkout-settings-display-order-type.example.ts',
          language: 'js',
          title: 'TS',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        "The `OrderStatusApi` object provides the merchant's checkout settings. Access the following properties on the `OrderStatusApi` object to read checkout configuration.",
      type: 'Docs_OrderStatus_CheckoutSettingsApi',
    },
    {
      title: 'useCheckoutSettings',
      description:
        "Returns the merchant's checkout settings that were active when the order was placed.",
      type: 'UseCheckoutSettingsGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Check `orderSubmission` for order type**: Use the `orderSubmission` property to determine if the order is a standard `'ORDER'` or a `'DRAFT_ORDER'` that requires merchant approval.\n- **Handle optional payment terms**: The `paymentTermsTemplate` is only present for B2B orders with deferred payment. Always check for `undefined` before displaying payment terms.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Checkout settings reflect the merchant's configuration at the time of checkout. If the merchant updates their checkout settings after the order is placed, the values returned by this API don't change.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Read the payment terms and display the due date and terms name. This example uses `useCheckoutSettings` and check for the optional `paymentTermsTemplate` property.',
        codeblock: {
          title: 'Show payment terms',
          tabs: [
            {
              code: '../../examples/apis/checkout-settings-show-payment-terms.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/checkout-settings-show-payment-terms.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Check whether the shipping address was editable during checkout. This example reads the `shippingAddress.isEditable` property from the checkout settings.',
        codeblock: {
          title: 'Check shipping editability',
          tabs: [
            {
              code: '../../examples/apis/checkout-settings-check-shipping-editability.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/checkout-settings-check-shipping-editability.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
