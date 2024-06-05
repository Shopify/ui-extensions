import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.return-details.render-after',
  description: `
  A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders in the return status card on the Order Status page. This card only shows when a return has been requested.
  `,
  subCategory: 'Order status',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account order status return details extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.order-status.return-details.render-after/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.order-status.return-details.render-after/default.example.ts',
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
