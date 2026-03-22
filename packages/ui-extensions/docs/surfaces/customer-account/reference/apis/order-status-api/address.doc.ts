import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Addresses API',
  description:
    'The Addresses API provides read-only access to the shipping and billing addresses associated with an order on the order status page. Use this API to read structured `MailingAddress` data, including recipient names, street addresses, and country details.',
  isVisualComponent: false,
  requires:
    'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). Most properties require level 2 access. The `company` property requires level 1 access.',
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the shipping and billing addresses associated with the order. Access the following properties on the `OrderStatusApi` object to read the mailing addresses that were used for the order.',
      type: 'Docs_OrderStatus_AddressApi',
    },
  ],
  defaultExample: {
    description:
      'Display the shipping address for an order, including the recipient name, street address, city, and country. This example reads `shopify.shippingAddress` and handles the case where the address is `undefined` for digital-only orders.',
    codeblock: {
      title: 'Display a shipping address',
      tabs: [
        {
          code: '../../examples/apis/addresses-shipping.example.jsx',
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
          'Compare the shipping and billing addresses to determine whether they match. This example reads both `shopify.shippingAddress` and `shopify.billingAddress`, checks key fields like `address1`, `city`, and `zip`, and displays a banner indicating whether the addresses are the same or different.',
        codeblock: {
          title: 'Compare shipping and billing addresses',
          tabs: [
            {
              code: '../../examples/apis/addresses-compare.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          "Display the billing address associated with the buyer's payment method. This example reads `shopify.billingAddress` and gracefully handles digital-only orders where the billing address may be `undefined`.",
        codeblock: {
          title: 'Display a billing address',
          tabs: [
            {
              code: '../../examples/apis/addresses-billing.example.jsx',
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
        '- **Handle digital-only orders**: Orders that contain only digital products may not have a shipping address. Check for `undefined` before rendering any shipping-related UI.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Addresses reflect the state at the time of checkout. If the customer updates their address in their account after placing the order, the values returned by this API don't change.",
    },
  ],
  related: [],
};

export default data;
