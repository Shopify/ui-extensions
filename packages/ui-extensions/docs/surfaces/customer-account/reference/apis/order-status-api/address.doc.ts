import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Addresses API',
  description:
    "The Addresses API provides the buyer's shipping and billing addresses from the order. Use this API to display address details or compare shipping and billing information.",
  isVisualComponent: false,
  requires:
    'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). Most properties require level 2 access. The `company` property requires level 1 access.',
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      'Read the shipping address from the order and render each address field in a formatted block. This example uses the `useShippingAddress` hook and handles the case where the address is `undefined` for digital orders.',
    codeblock: {
      title: 'Display the shipping address',
      tabs: [
        {
          code: '../../examples/apis/address-display-shipping-address.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/address-display-shipping-address.example.ts',
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
        "The `OrderStatusApi` object provides the buyer's shipping and billing addresses. Access the following properties on the `OrderStatusApi` object to read address data.",
      type: 'Docs_OrderStatus_AddressApi',
    },
    {
      title: 'useShippingAddress',
      description:
        "Returns the buyer's shipping address for the order. The value is `undefined` for digital orders or when the address hasn't been provided.",
      type: 'UseShippingAddressGeneratedType',
    },
    {
      title: 'useBillingAddress',
      description:
        "Returns the buyer's billing address for the order. The value is `undefined` when the billing address isn't available.",
      type: 'UseBillingAddressGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Gracefully handle missing addresses**: Either the shipping or billing address may be `undefined`. Always check for `undefined` before rendering address fields.\n- **Don't assume address completeness**: Some fields like `address2`, `company`, and `phone` are optional and may not be present.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Addresses reflect the state at the time of checkout. If the customer updates their address in their account after placing the order, the values returned by this API don't change.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Compare the shipping and billing addresses to determine if they match, and display a status banner. This example uses both `useShippingAddress` and `useBillingAddress` to check key fields like `address1`, `city`, and `zip`.',
        codeblock: {
          title: 'Compare shipping and billing addresses',
          tabs: [
            {
              code: '../../examples/apis/address-compare-shipping-billing.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/address-compare-shipping-billing.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Read the billing address from the order and render each field in a formatted block. This example uses the `useBillingAddress` hook and gracefully handles `undefined` values for optional fields.',
        codeblock: {
          title: 'Display the billing address',
          tabs: [
            {
              code: '../../examples/apis/address-display-billing-address.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/address-display-billing-address.example.ts',
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
