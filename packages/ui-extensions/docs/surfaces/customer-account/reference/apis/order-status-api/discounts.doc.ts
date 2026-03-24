import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discounts API',
  description:
    'The Discounts API provides the discount codes and discount allocations applied to the order. Use this API to display applied discounts or calculate total savings.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      'Read the discount codes applied to the order and display each code. This example uses the `useDiscountCodes` hook and lists the `code` property from each entry.',
    codeblock: {
      title: 'Display discount codes',
      tabs: [
        {
          code: '../../examples/apis/discounts-display-discount-codes.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/discounts-display-discount-codes.example.ts',
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
        'The `OrderStatusApi` object provides discount codes and allocations from the order. Access the following properties on the `OrderStatusApi` object to read discount data.',
      type: 'Docs_OrderStatus_DiscountsApi',
    },
    {
      title: 'useDiscountCodes',
      description:
        'Returns the discount codes that the buyer applied to the order.',
      type: 'UseDiscountCodesGeneratedType',
    },
    {
      title: 'useDiscountAllocations',
      description:
        'Returns the order-level discount allocations, including code-based, automatic, and custom discounts.',
      type: 'UseDiscountAllocationsGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Distinguish discount types**: Use the `type` field on each allocation to differentiate between `'code'`, `'automatic'`, and `'custom'` discounts.\n- **Use allocations for savings totals**: Sum the `discountedAmount` across all allocations to calculate total savings. Don't rely on discount codes alone, as automatic and custom discounts don't have codes.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Per-line discount allocations are available on individual cart lines through the [Cart Lines API](/docs/api/customer-account-ui-extensions/target-apis/order-apis/cart-lines-api), not through this API. The `discountAllocations` property on the Discounts API returns only order-level discounts.\n- Discount allocations show the discounted amount, but not the original discount configuration. You can't determine whether a discount was a percentage or fixed amount from the allocation alone.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Calculate the total savings from all discount allocations and display the amount. This example uses `useDiscountAllocations` to sum the `discountedAmount` across all allocations.',
        codeblock: {
          title: 'Show discount savings',
          tabs: [
            {
              code: '../../examples/apis/discounts-show-discount-savings.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/discounts-show-discount-savings.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Group discount allocations by type and display each category separately. This example filters allocations by their `type` field into code, automatic, and custom groups.',
        codeblock: {
          title: 'Categorize discounts',
          tabs: [
            {
              code: '../../examples/apis/discounts-categorize-discounts.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/discounts-categorize-discounts.example.ts',
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
