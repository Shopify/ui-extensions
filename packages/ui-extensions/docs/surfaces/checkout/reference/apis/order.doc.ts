import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  ORDER_STATUS_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order',
  description:
    'The API for interacting with the order, available on the **Order status** page.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
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
