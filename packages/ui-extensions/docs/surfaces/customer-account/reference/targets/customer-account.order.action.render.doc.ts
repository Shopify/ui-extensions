import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  ORDER_ACTION_API,
  ORDER_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order.action.render',
  description: `
    A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders inside a modal, as a result of the customer clicking an order action button.
    This target only renders if you’ve also implemented an order action button via the [customer-account.order.action.menu-item.render extension target](/docs/api/customer-account-ui-extensions/targets/order-action-menu/customer-account-order-action-menu-item-render), without the \`to\` and \`onPress\` props.
    The root of the \`customer-account.order.action.render\` extension must be a [CustomerAccountAction](/docs/api/customer-account-ui-extensions/unstable/components/customeraccountaction).
  `,
  overviewPreviewDescription:
    'A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders inside a modal, as a result of the customer clicking the button rendered via the `customer-account.order.action.menu-item.render` extension target.',
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Order action menu',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account order action extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.order.action.render/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.order.action.render/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  related: [],
  definitions: [
    ORDER_ACTION_API,
    ORDER_API,
    CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  ],
  type: 'Target',
};

export default data;
