import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {FULFILLMENT_DETAILS_APIS} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.fulfillment-details.render-after',
  description: `
    A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders in the delivery status card on the Order Status page. A separate delivery status card is shown for each fulfillment.
  `,
  subCategory: 'Order status',
  defaultExample: {
    description: '',
    codeblock: {
      title:
        'Customer account order status fulfillment details extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.order-status.fulfillment-details.render-after/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.order-status.fulfillment-details.render-after/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  related: [],
  ...FULFILLMENT_DETAILS_APIS,
};

export default data;
