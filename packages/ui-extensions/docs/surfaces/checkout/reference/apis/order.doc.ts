import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  ORDER_CONFIRMATION_API_PROPERTIES_DESCRIPTION,
  getExample,
  ORDER_STATUS_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

// added temporarily to keep a note that the order status api docs have been moved to customer accounts
// can be removed from 2025-01 on
interface OrderStatusApiEmpty {}

const data: ReferenceEntityTemplateSchema = {
  name: 'Order',
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
    {
      title: 'OrderStatusApi',
      description: ORDER_STATUS_API_PROPERTIES_DESCRIPTION,
      type: 'OrderStatusApiEmpty',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
