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
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/targets/customer-account.order-status.unfulfilled-items.render-after/default.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  related: [],
  ...ORDER_STATUS_API,
};

export default data;
