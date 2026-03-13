import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Shop API',
  description: 'The API for interacting with shop.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_ShopApi',
    },
    {
      title: 'useShop',
      description: 'Returns the `shop` where the checkout is taking place.',
      type: 'UseShopGeneratedType',
    },
  ],
  related: [],
};

export default data;
