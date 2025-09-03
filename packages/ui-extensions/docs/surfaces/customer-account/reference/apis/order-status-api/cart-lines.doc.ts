import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ORDER_STATUS_API_DEFINITION,
  CART_LINE_ITEM_API_DEFINITION,
} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Lines',
  description: 'The APIs for interacting with the cart lines.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_CartLinesApi',
    },
  ],
  defaultExample: {
    codeblock: {
      title: '',
      tabs: [
        {
          code: '../../examples/apis/cart-line-item.example.tsx',
          language: 'jsx',
          title: 'Preact',
        },
      ],
    },
  },
  related: [],
};

export default data;
