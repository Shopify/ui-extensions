import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Lines API',
  description:
    'The Cart Lines API provides read-only access to the line items in an order on the order status page. Use this API to read merchandise details, quantities, per-line costs, discount allocations, and [bundle](/docs/apps/build/product-merchandising/bundles) components for each item the customer purchased.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the line items in the order. Access the following properties on the `OrderStatusApi` object to read merchandise details, quantities, per-line costs, discount allocations, and bundle line components.',
      type: 'Docs_OrderStatus_CartLinesApi',
    },
  ],
  defaultExample: {
    description:
      "Render a list of purchased items showing the product title, quantity, and total cost. This example iterates over `shopify.lines` and displays each line's `merchandise.title`, `quantity`, and `cost.totalAmount`.",
    codeblock: {
      title: 'Display order items',
      tabs: [
        {
          code: '../../examples/apis/cart-lines-items.example.jsx',
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
          "Display the cost breakdown for individual line items, including any applied discounts. This example reads each line's `cost.totalAmount` and iterates over `discountAllocations` to show per-line discount details.",
        codeblock: {
          title: 'Show line-level pricing',
          tabs: [
            {
              code: '../../examples/apis/cart-lines-pricing.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Identify bundle products and display their individual sub-items. This example checks each cart line for `lineComponents` and renders the parent product with its bundled components underneath.',
        codeblock: {
          title: 'Detect and display bundle components',
          tabs: [
            {
              code: '../../examples/apis/cart-lines-bundles.example.jsx',
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
        '- **Group related lines by product**: Multiple cart lines can reference the same product with different variants or options. Group by `merchandise.product.id` if you need to show a product-level summary.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Cart line IDs aren't stable across operations. Don't cache or persist line IDs because they can change if the line items are modified.\n- Cart lines don't include fulfillment or shipping status. To determine whether items have been shipped, use the [GraphQL Admin API](/docs/api/admin-graphql) through a backend service.",
    },
  ],
  related: [],
};

export default data;
