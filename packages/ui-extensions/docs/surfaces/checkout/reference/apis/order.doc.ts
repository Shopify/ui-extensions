import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  ORDER_CONFIRMATION_API_PROPERTIES_DESCRIPTION,
  getExample,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order API',
  description:
    'The API for interacting with the order confirmation, available on the **Thank You** page.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  defaultExample: getExample('order-confirmation/default', ['jsx', 'js']),
  definitions: [
    {
      title: 'OrderConfirmationApi',
      description: ORDER_CONFIRMATION_API_PROPERTIES_DESCRIPTION,
      type: 'OrderConfirmationApi',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
