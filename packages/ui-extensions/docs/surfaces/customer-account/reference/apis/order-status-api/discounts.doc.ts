import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discounts API',
  description:
    'The Discounts API provides read-only access to discount codes and discount allocations applied to an order on the order status page. Use this API to read which discounts were applied, how much was discounted, and whether each was a code, automatic, or custom discount from a [Shopify Function](/docs/apps/build/functions).',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the discount codes and discount allocations applied to the order. Access the following properties on the `OrderStatusApi` object to read which discounts were applied and how much was discounted.',
      type: 'Docs_OrderStatus_DiscountsApi',
    },
  ],
  defaultExample: {
    description:
      'Show the discount codes the buyer entered during checkout. This example reads `shopify.discountCodes` and renders each code in a styled list.',
    codeblock: {
      title: 'Display applied discount codes',
      tabs: [
        {
          code: '../../examples/apis/discounts-codes.example.jsx',
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
          'Calculate and display the total savings from all discount allocations. This example iterates over `shopify.discountAllocations` to sum the discounted amounts and shows a per-discount breakdown.',
        codeblock: {
          title: 'Show discount savings',
          tabs: [
            {
              code: '../../examples/apis/discounts-savings.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Label each discount by its type: code, automatic, or custom. This example reads the `type` field on each allocation and maps it to a human-readable label using a lookup object.',
        codeblock: {
          title: 'Identify discount types',
          tabs: [
            {
              code: '../../examples/apis/discounts-types.example.jsx',
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
        '- **Check both properties for a complete picture**: `discountCodes` lists the codes entered by the buyer, while `discountAllocations` shows the actual amounts discounted. A single code can result in multiple allocations across different line items.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Per-line discount allocations are available on individual cart lines through the [Cart Lines API](/docs/api/customer-account-ui-extensions/target-apis/order-apis/cart-lines-api), not through this API. The `discountAllocations` property on the Discounts API returns only order-level discounts.\n- Discount allocations show the discounted amount, but not the original discount configuration. You can't determine whether a discount was a percentage or fixed amount from the allocation data alone.",
    },
  ],
  related: [],
};

export default data;
