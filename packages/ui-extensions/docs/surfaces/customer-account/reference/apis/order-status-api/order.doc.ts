import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order',
  description:
    'The API for interacting with the order, available on the Order Status Page.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_OrderApi',
    },
    {
      title: 'useOrder',
      description:
        "Returns the order information that's available on the Order Status Page.",
      type: 'UseOrderGeneratedType',
    },
  ],
  related: [],
};

export default data;
