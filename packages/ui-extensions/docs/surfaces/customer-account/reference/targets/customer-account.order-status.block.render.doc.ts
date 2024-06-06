import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API, ORDER_STATUS_SURFACE_NOTE} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.block.render',
  description: `A [block extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#block-extension-targets) that renders exclusively on the Order Status Page.

    Merchants can choose to place this extension in any of the supported locations. To preview your extension in each supported location, use the placement reference for that location as a URL parameter.

    ${ORDER_STATUS_SURFACE_NOTE}
  `,
  overviewPreviewDescription:
    'A [block extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#block-extension-targets) that renders exclusively on the Order Status Page.',
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
      name: 'Placement references',
      subtitle: 'Navigate to',
      url: '/docs/apps/customer-accounts/best-practices/testing-ui-extensions#order-status',
    },
  ],
  ...ORDER_STATUS_API,
  type: 'Target',
};

export default data;
