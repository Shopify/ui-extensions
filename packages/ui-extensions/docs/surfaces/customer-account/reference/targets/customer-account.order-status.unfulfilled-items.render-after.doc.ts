import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.unfulfilled-items.render-after',
  description: `
  A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders in the delivery status card for unfulfilled items on the Order Status page.
  `,
  subCategory: 'Order status',
  defaultExample: {
    description: '',
    codeblock: {
      title:
        'Customer account order status unfulfilled details extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.order-status.unfulfilled-items.render-after/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.order-status.unfulfilled-items.render-after/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  related: [],
  ...ORDER_STATUS_API,
};

export default data;
