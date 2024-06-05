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
    {
      title: 'useCartLines',
      description:
        'Returns the current line items for the checkout, and automatically re-renders your component if line items are added, removed, or updated.',
      type: 'UseCartLinesGeneratedType',
    },
    {
      title: CART_LINE_ITEM_API_DEFINITION.title,
      description: CART_LINE_ITEM_API_DEFINITION.description,
      type: 'Docs_CartLineItem_CartLinesApi',
    },
    {
      title: 'useTarget',
      description:
        'Returns the cart line the extension is attached to. This hook can only be used by `cart-line-item` extension targets.',
      type: 'UseTargetGeneratedType',
    },
  ],
  defaultExample: {
    codeblock: {
      title: '',
      tabs: [
        {
          code: '../../examples/apis/cart-line-item.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/cart-line-item.example.ts',
          language: 'js',
          title: 'JavaScript',
        },
      ],
    },
  },
  related: [],
};

export default data;
