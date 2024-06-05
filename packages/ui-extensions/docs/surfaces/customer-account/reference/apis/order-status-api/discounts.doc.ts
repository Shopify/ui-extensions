import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Discounts',
  description: 'The API for interacting with discounts.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_DiscountsApi',
    },
    {
      title: 'useDiscountAllocations',
      description:
        'Returns the current discount allocations applied to the cart.',
      type: 'UseDiscountAllocationsGeneratedType',
    },
    {
      title: 'useDiscountCodes',
      description: 'Returns the current discount codes applied to the cart.',
      type: 'UseDiscountCodesGeneratedType',
    },
  ],
  related: [],
};

export default data;
