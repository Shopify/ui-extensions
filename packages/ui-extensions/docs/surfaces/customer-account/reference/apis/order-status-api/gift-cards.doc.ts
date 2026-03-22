import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Gift Cards API',
  description:
    'The Gift Cards API provides the gift cards applied to the order, including the amount used and remaining balance. Use this API to display gift card payment details or summarize gift card usage.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      'Read the applied gift cards from the order and display each card with its last four characters and amount used. This example uses the `useAppliedGiftCards` hook and iterates over the gift card array.',
    codeblock: {
      title: 'Display applied gift cards',
      tabs: [
        {
          code: '../../examples/apis/gift-cards-display-applied-gift-cards.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/gift-cards-display-applied-gift-cards.example.ts',
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
        'The `OrderStatusApi` object provides the gift cards applied to the order. Access the following properties on the `OrderStatusApi` object to read gift card data.',
      type: 'Docs_OrderStatus_GiftCardsApi',
    },
    {
      title: 'useAppliedGiftCards',
      description:
        'Returns the gift cards applied to the order, including the amount used and remaining balance for each card.',
      type: 'UseAppliedGiftCardsGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Only show the last four characters**: The `lastCharacters` property provides a safe identifier for display. Don't attempt to display or store full gift card codes.\n- **Show remaining balance**: Display the `balance` alongside the `amountUsed` so buyers know how much is left on their gift card.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The full gift card code is never exposed. Only the last four characters are available through `lastCharacters`.\n- The `balance` reflects the remaining amount at the time the order was placed. It doesn't update if the gift card is used for subsequent purchases.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Read each applied gift card and display the remaining balance after the order. This example uses `useAppliedGiftCards` to access the `balance` property on each gift card.',
        codeblock: {
          title: 'Show gift card balances',
          tabs: [
            {
              code: '../../examples/apis/gift-cards-show-gift-card-balances.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/gift-cards-show-gift-card-balances.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Calculate the total amount paid with gift cards and display a summary. This example sums the `amountUsed` property across all applied gift cards.',
        codeblock: {
          title: 'Summarize gift card payments',
          tabs: [
            {
              code: '../../examples/apis/gift-cards-summarize-gift-card-payments.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/gift-cards-summarize-gift-card-payments.example.ts',
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
