import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order API',
  description:
    'The Order API provides read-only access to core order details on the order status page. Use this API to identify the current order, display its status, or correlate it with data from other Shopify APIs.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides details about the placed order. Access the following properties on the `OrderStatusApi` object to read the order ID, display name, confirmation number, processing date, and cancellation status.',
      type: 'Docs_OrderStatus_OrderApi',
    },
  ],
  defaultExample: {
    description:
      'Show the human-readable order name and processing date to the buyer. This example reads `shopify.order` and displays the `name` field alongside a formatted `processedAt` timestamp.',
    codeblock: {
      title: 'Display the order number and status',
      tabs: [
        {
          code: '../../examples/apis/order-display.example.jsx',
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
          'Display the confirmation number so the buyer can reference it for support. This example reads the `confirmationNumber` from `shopify.order` and renders it in a highlighted box.',
        codeblock: {
          title: 'Show the confirmation number',
          tabs: [
            {
              code: '../../examples/apis/order-confirmation.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Detect whether the order has been cancelled and display the appropriate status. This example checks the `cancelledAt` timestamp on `shopify.order` and shows a warning banner if the order is cancelled.',
        codeblock: {
          title: 'Check the cancellation status',
          tabs: [
            {
              code: '../../examples/apis/order-cancellation.example.jsx',
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
        '- **Use `name` for display and `id` for lookups**: The `name` property (for example, `#1000`) is the human-readable order number shown to buyers. Use the `id` property (a globally-unique GID) for API lookups and data storage.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The Order API provides summary-level information only. For detailed order data such as fulfillments or transactions, use the [GraphQL Admin API](/docs/api/admin-graphql) through a backend service.',
    },
  ],
  related: [],
};

export default data;
