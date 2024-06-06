import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Gift Cards',
  description: 'The API for interacting with gift cards.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_GiftCardsApi',
    },
    {
      title: 'useAppliedGiftCards',
      description: 'Returns the current gift cards applied to the cart.',
      type: 'UseAppliedGiftCardsGeneratedType',
    },
  ],
  related: [],
};

export default data;
