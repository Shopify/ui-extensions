import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order API',
  description:
    'The Order API provides information about the placed order, including its ID, display name, confirmation number, and timestamps. Use this API to show order details or check cancellation status.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      'Read the order details and display the order name, confirmation number, and processing date. This example uses the `useOrder` hook and formats the timestamps for display.',
    codeblock: {
      title: 'Display order details',
      tabs: [
        {
          code: '../../examples/apis/order-display-order-details.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/order-display-order-details.example.ts',
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
        'The `OrderStatusApi` object provides information about the placed order. Access the following properties on the `OrderStatusApi` object to read order data.',
      type: 'Docs_OrderStatus_OrderApi',
    },
    {
      title: 'useOrder',
      description:
        'Returns the placed order details, including its ID, name, and timestamps.',
      type: 'UseOrderGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Handle undefined order**: The `order` property may be `undefined` before the order is fully processed. Always check for `undefined` before accessing order fields.\n- **Use `confirmationNumber` for buyer-facing display**: The `confirmationNumber` is a short, readable identifier. The `id` is a GID intended for API calls, not for display.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The Order API provides summary-level information only. For detailed order data such as fulfillments or transactions, use the [GraphQL Admin API](/docs/api/admin-graphql) through a backend service.',
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Check whether the order has been cancelled and display the cancellation date. This example uses `useOrder` and checks the `cancelledAt` property for a truthy value.',
        codeblock: {
          title: 'Check cancellation status',
          tabs: [
            {
              code: '../../examples/apis/order-check-cancellation-status.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/order-check-cancellation-status.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Read the confirmation number from the order and display it in a prominent banner. This example uses `useOrder` and gracefully handles older orders where `confirmationNumber` may be absent.',
        codeblock: {
          title: 'Display confirmation number',
          tabs: [
            {
              code: '../../examples/apis/order-display-confirmation-number.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/order-display-confirmation-number.example.ts',
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
