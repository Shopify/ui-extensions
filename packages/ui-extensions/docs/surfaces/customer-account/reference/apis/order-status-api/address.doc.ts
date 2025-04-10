import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ORDER_STATUS_API_DEFINITION,
  REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Addresses',
  description: 'The API for interacting with addresses.',
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
  category: 'APIs',
  type: 'API',
  subCategory: 'Order Status API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_AddressApi',
    },
    {
      title: 'useShippingAddress',
      description:
        'Returns the proposed `shippingAddress` applied to the checkout.',
      type: 'UseShippingAddressGeneratedType',
    },
    {
      title: 'useBillingAddress',
      description: 'Returns `billingAddress` specified in the order.',
      type: 'UseBillingAddressGeneratedType',
    },
  ],
  related: [],
};

export default data;
