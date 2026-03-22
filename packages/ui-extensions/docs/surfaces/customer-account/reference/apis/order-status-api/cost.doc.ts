import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cost API',
  description:
    'The Cost API provides read-only access to the cost breakdown of an order on the order status page. Use this API to read the subtotal, total shipping, total tax, and total amounts, each returned as a `Money` object with an `amount` and `currencyCode`.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the cost breakdown for the order. Access the following properties on the `OrderStatusApi` object to read the subtotal, total shipping, total tax, and total amounts.',
      type: 'Docs_OrderStatus_CostApi',
    },
  ],
  defaultExample: {
    description:
      'Display a full breakdown of the order cost, including the subtotal, shipping, tax, and total. This example reads `shopify.cost.subtotalAmount`, `totalShippingAmount`, `totalTaxAmount`, and `totalAmount` and formats each as a currency string.',
    codeblock: {
      title: 'Display an order cost summary',
      tabs: [
        {
          code: '../../examples/apis/cost-summary.example.jsx',
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
          'Display the shipping cost and detect when shipping is free. This example reads `shopify.cost.totalShippingAmount` and conditionally renders a "Free shipping" banner when the amount is zero.',
        codeblock: {
          title: 'Highlight shipping costs',
          tabs: [
            {
              code: '../../examples/apis/cost-shipping.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          "Format order cost amounts using the buyer's currency. This example reads the currency code from `shopify.localization` and uses `Intl.NumberFormat` to display properly formatted money values.",
        codeblock: {
          title: 'Format costs with the Localization API',
          tabs: [
            {
              code: '../../examples/apis/cost-formatted.example.jsx',
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
        "- **Format currency using the Localization API**: Use the [Order Status Localization API](/docs/api/customer-account-ui-extensions/target-apis/order-apis/order-status-localization-api) to determine the buyer's currency and format money values appropriately.\n- **Show a complete cost summary**: Combine the Cost API with the [Discounts API](/docs/api/customer-account-ui-extensions/target-apis/order-apis/discounts-api) and the [Gift Cards API](/docs/api/customer-account-ui-extensions/target-apis/order-apis/gift-cards-api) to display a full breakdown of the order's pricing.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The Cost API doesn't include refund amounts. If the order has been partially or fully refunded, those adjustments aren't reflected in the cost properties.",
    },
  ],
  related: [],
};

export default data;
