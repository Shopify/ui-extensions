import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  ORDER_STATUS_API_PROPERTIES_DESCRIPTION,
  ORDER_CONFIRMATION_API_PROPERTIES_DESCRIPTION,
  getExample,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order',
  description:
    'The API for interacting with the order, available on the **Order status** page.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  defaultExample: getExample('order-confirmation/default', ['jsx', 'js']),
  examples: {
    description: '',
    examples: [getExample('order-status/default', ['jsx', 'js'])],
  },
  definitions: [
    {
      title: 'OrderConfirmationApi',
      description: ORDER_CONFIRMATION_API_PROPERTIES_DESCRIPTION,
      type: 'OrderConfirmationApi',
    },
    {
      title: 'OrderStatusApi',
      description: ORDER_STATUS_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_OrderStatus_OrderApi',
    },
    {
      title: 'useOrder',
      description:
        "Returns the order information that's available on the **Order status** page.",
      type: 'UseOrderGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
