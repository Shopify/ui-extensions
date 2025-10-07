import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-index.announcement.render',
  description: `A static extension target that is rendered on top of the **Order Index page** as a dismissable announcement.`,
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/targets/customer-account.order-index.announcement.render/default.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  subCategory: 'Order index',
  related: [
    {
      name: 'Placement references',
      subtitle: 'Navigate to',
      url: '/docs/apps/customer-accounts/best-practices/testing-ui-extensions#order-index',
    },
  ],
  ...ORDER_STATUS_API,
};

export default data;
