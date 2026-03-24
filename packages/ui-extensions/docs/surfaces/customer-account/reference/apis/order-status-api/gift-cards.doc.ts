import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Gift Cards API',
  description:
    'The Gift Cards API provides read-only access to the gift cards applied to an order on the order status page. Use this API to display the masked gift card code, amount applied, and remaining balance for each card.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the gift cards applied to the order. Access the following properties on the `OrderStatusApi` object to read which gift cards were used, how much was applied, and the remaining balance.',
      type: 'Docs_OrderStatus_GiftCardsApi',
    },
  ],
  defaultExample: {
    description:
      'Show which gift cards were used for the order, identified by the last four characters of each code. This example reads `shopify.appliedGiftCards` and renders the masked code alongside the amount used.',
    codeblock: {
      title: 'Display applied gift cards',
      tabs: [
        {
          code: '../../examples/apis/gift-cards-applied.example.jsx',
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
          'Display the amount used and remaining balance for each applied gift card. This example reads both `amountUsed` and `balance` on each gift card entry and formats them as currency values.',
        codeblock: {
          title: 'Show gift card balances',
          tabs: [
            {
              code: '../../examples/apis/gift-cards-balance.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Display gift card deductions alongside the order total in a payment summary layout. This example combines gift card data from `shopify.appliedGiftCards` with the order total from `shopify.cost.totalAmount`.',
        codeblock: {
          title: 'Show gift cards in a payment summary',
          tabs: [
            {
              code: '../../examples/apis/gift-cards-payment-summary.example.jsx',
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
        '- **Show gift cards alongside other payment methods**: Gift cards are applied before other payment methods. Display gift card information in your payment summary to give buyers a complete view of how their order was paid.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The full gift card code is never exposed. Only the last four characters are available through `lastCharacters`.\n- The `balance` reflects the remaining amount at the time the order was placed. It doesn't update if the gift card is used for subsequent purchases.",
    },
  ],
  related: [],
};

export default data;
