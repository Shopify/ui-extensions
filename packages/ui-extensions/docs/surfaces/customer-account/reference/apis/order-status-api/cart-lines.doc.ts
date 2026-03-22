import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Lines API',
  description:
    'The Cart Lines API provides the line items in the order, including product details, quantities, costs, and discounts. Use this API to display order contents or calculate item totals.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      'Read all line items from the order and display each product with its quantity and price. This example uses the `useCartLines` hook and formats each line with the product title and cost.',
    codeblock: {
      title: 'Display line items',
      tabs: [
        {
          code: '../../examples/apis/cart-lines-display-line-items.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/cart-lines-display-line-items.example.ts',
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
        'The `OrderStatusApi` object provides the line items from the order. Access the following properties on the `OrderStatusApi` object to read line item data.',
      type: 'Docs_OrderStatus_CartLinesApi',
    },
    {
      title: 'useCartLines',
      description:
        'Returns the line items in the order, including product details, quantities, costs, and any applied discounts.',
      type: 'UseCartLinesGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Check for bundle components**: Use `lineComponents` to detect and display [bundle](/docs/apps/build/product-merchandising/bundles) contents. The array is empty for non-bundle items.\n- **Use line item costs for accurate totals**: The `cost.totalAmount` on each line item already includes line-level discounts.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Cart line IDs aren't stable across operations. Don't cache or persist line IDs because they can change if the line items are modified.\n- Cart lines don't include fulfillment or shipping status. To determine whether items have been shipped, use the [GraphQL Admin API](/docs/api/admin-graphql) through a backend service.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Calculate the total number of items across all line items in the order. This example uses `useCartLines` to sum the `quantity` property across all lines.',
        codeblock: {
          title: 'Calculate total item count',
          tabs: [
            {
              code: '../../examples/apis/cart-lines-calculate-item-count.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/cart-lines-calculate-item-count.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Identify bundle line items and display their individual components. This example checks the `lineComponents` array on each cart line to detect and render bundle contents.',
        codeblock: {
          title: 'Show bundle components',
          tabs: [
            {
              code: '../../examples/apis/cart-lines-show-bundle-components.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/cart-lines-show-bundle-components.example.ts',
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
