import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Require Login API',
  description: 'The API for interacting with the authentication.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_RequireLoginApi',
    },
  ],
  related: [
    {
      name: 'Order status page',
      subtitle: 'Learn more',
      url: '/docs/apps/customer-accounts/order-status-page',
      type: 'growth',
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description: 'Call requireLogin before triggering an action',
        codeblock: {
          title: 'Call requireLogin before triggering an action',
          tabs: [
            {
              code: '../../examples/apis/require-login.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/require-login.example.ts',
              language: 'js',
              title: 'JavaScript',
            },
          ],
        },
      },
    ],
  },
};

export default data;
