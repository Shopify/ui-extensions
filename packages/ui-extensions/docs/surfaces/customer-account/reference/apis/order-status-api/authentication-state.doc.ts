import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Authentication State',
  description: 'The API for interacting with authentication state.',
  isVisualComponent: false,
  category: 'APIs',
  subCategory: 'Order Status API',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_AuthenticationStateApi',
    },
    {
      title: 'useAuthenticationState',
      description: 'Returns authentication state of Order status page.',
      type: 'UseAuthenticationStateGeneratedType',
    },
  ],
  related: [],
};

export default data;
