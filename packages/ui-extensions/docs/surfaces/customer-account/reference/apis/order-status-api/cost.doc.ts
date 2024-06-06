import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cost',
  description: 'The API for interacting with the cost of a checkout.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_CostApi',
    },
    {
      title: 'useTotalAmount',
      description:
        'Returns a `Money` value representing the minimum a buyer can expect to pay at the current step of checkout. This value excludes amounts yet to be negotiated. For example, the information step might not have delivery costs calculated.',
      type: 'UseTotalAmountGeneratedType',
    },
  ],
  related: [],
};

export default data;
