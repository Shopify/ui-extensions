import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ORDER_STATUS_API_DEFINITION,
  REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Addresses API',
  description: 'The API for interacting with addresses.',
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_AddressApi',
    },
  ],
  related: [],
};

export default data;
