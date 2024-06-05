import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API, ORDER_STATUS_SURFACE_NOTE} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.customer-information.render-after',
  description: `
  A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders below the order details section of the Order Status page.

  ${ORDER_STATUS_SURFACE_NOTE}
  `,
  subCategory: 'Order status',
  defaultExample: {
    description: '',
    codeblock: {
      title:
        'Customer account order status customer information extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.order-status.customer-information.render-after/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.order-status.customer-information.render-after/default.example.ts',
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
