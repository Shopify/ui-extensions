import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Order API',
  description:
    'The API for interacting with the order, available on the Order Status Page.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_OrderApi',
    },
  ],
  related: [],
};

export default data;
