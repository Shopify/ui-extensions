import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  ORDER_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order.action.menu-item.render',
  description:
    'A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders as 1 order action on the Order Index and Order Status pages in customer accounts.',
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Order action menu',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account order menu item extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.order.action.menu-item.render/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.order.action.menu-item.render/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  examples: {
    description: 'Additional examples for menu item extensions.',
    examples: [
      {
        codeblock: {
          title: 'Loading your data before rendering the menu item',
          tabs: [
            {
              code: '../examples/targets/customer-account.order.action.menu-item.render/load-data-upfront.example.tsx',
              language: 'jsx',
              title: 'React',
            },
          ],
        },
      },
    ],
  },
  related: [
    {
      name: 'Order status page',
      subtitle: 'Limitations',
      url: '/docs/apps/customer-accounts/order-status-page#pre-authenticated-order-status-page',
      type: 'tutorial',
    },
  ],
  definitions: [
    ORDER_API,
    CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
    {
      title: 'ButtonProps',
      description:
        'Supported props for Buttons used in order actions.<br><br>`children` only support text.<br><br>Omit `onPress` and `to` to trigger the `customer-account.order.action.render` extension target on press.',
      type: 'Docs_OrderActionMenu_Button',
      filePath: 'api/docs.ts',
    },
  ],
  type: 'Target',
};

export default data;
