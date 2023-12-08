import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API, ORDER_STATUS_SURFACE_NOTE} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.block.render',
  description: `A [block extension target](/docs/api/checkout-ui-extensions/extension-targets-overview#block-extension-targets) that renders exclusively on the **Order status** page. Unlike static extension targets, block extension targets render where the merchant sets them using the [checkout editor](/docs/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).

  The [supported locations](/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for block extension targets can be previewed during development by [using a URL parameter](/docs/apps/checkout/best-practices/testing-ui-extensions#block-extension-targets).

  ${ORDER_STATUS_SURFACE_NOTE}
  `,
  category: 'Targets',
  subCategory: 'Order status',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account order status extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.order-status.block.render/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.order-status.block.render/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  related: [
    {
      name: 'Targets overview',
      subtitle: 'Navigate to',
      url: '/docs/api/customer-account-ui-extensions/targets',
    },
  ],
  ...ORDER_STATUS_API,
};

export default data;
