import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ORDER_STATUS_CART_LINE_ITEM_API,
  ORDER_STATUS_SURFACE_NOTE,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.cart-line-item.render-after',
  description: `
  A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders on every line item, inside the details under the line item properties element on the Order Status Page.

  ${ORDER_STATUS_SURFACE_NOTE}
  `,
  subCategory: 'Order status',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account order status card line item extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.order-status.cart-line-item.render-after/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.order-status.cart-line-item.render-after/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  related: [],
  ...ORDER_STATUS_CART_LINE_ITEM_API,
};

export default data;
