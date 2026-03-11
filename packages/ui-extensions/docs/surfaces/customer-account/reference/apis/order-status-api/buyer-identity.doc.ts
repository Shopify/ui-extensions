import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ORDER_STATUS_API_DEFINITION,
  REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Buyer Identity API',
  description: 'The API for interacting with the buyer identity.',
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_BuyerIdentityApi',
    },
  ],
  related: [
    {
      name: 'Order status page',
      subtitle: 'Limitations',
      url: '/docs/apps/customer-accounts/order-status-page#pre-authenticated-order-status-page',
      type: 'tutorial',
    },
  ],
};

export default data;
