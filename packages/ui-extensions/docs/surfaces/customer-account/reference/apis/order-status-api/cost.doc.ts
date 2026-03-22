import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cost API',
  description:
    "The Cost API provides the order's cost breakdown, including subtotal, shipping, tax, and total amounts. Use this API to display order totals or format cost data for the buyer.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      'Read the cost breakdown from the order and display the subtotal, shipping, tax, and total amounts. This example subscribes to the `cost` properties and format each value with the currency code.',
    codeblock: {
      title: 'Display order totals',
      tabs: [
        {
          code: '../../examples/apis/cost-display-order-totals.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/cost-display-order-totals.example.ts',
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
        "The `OrderStatusApi` object provides the order's cost breakdown. Access the following properties on the `OrderStatusApi` object to read cost data.",
      type: 'Docs_OrderStatus_CostApi',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Handle undefined shipping and tax amounts**: The `totalShippingAmount` and `totalTaxAmount` properties may be `undefined` if they haven't been calculated yet. Always check for `undefined` before rendering.\n- **Use `totalAmount` for the final price**: The `totalAmount` already accounts for all discounts, taxes, and shipping charges.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The Cost API doesn't include refund amounts. If the order has been partially or fully refunded, those adjustments aren't reflected in the cost properties.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Read the shipping and tax amounts from the order cost and display them separately. This example checks for `undefined` values since shipping and tax may not be calculated yet.',
        codeblock: {
          title: 'Show shipping and tax',
          tabs: [
            {
              code: '../../examples/apis/cost-show-shipping-and-tax.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/cost-show-shipping-and-tax.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          "Format the cost amounts using the buyer's locale and currency settings. This example combines the Cost API with `Intl.NumberFormat` for locale-aware money formatting.",
        codeblock: {
          title: 'Format cost with locale',
          tabs: [
            {
              code: '../../examples/apis/cost-format-cost-with-locale.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/cost-format-cost-with-locale.example.ts',
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
