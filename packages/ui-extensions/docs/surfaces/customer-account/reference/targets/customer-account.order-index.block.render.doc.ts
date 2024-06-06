import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-index.block.render',
  description:
    'A [block extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#block-extension-targets) that renders exclusively on the Order Index page in customer accounts. Merchants can choose to place this extension in any of the supported locations. To preview your extension in each supported location, use the placement reference for that location as a URL parameter.',
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Order index',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account order index extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.order-index.block.render/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.order-index.block.render/default.example.ts',
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
      url: '/docs/apps/customer-accounts/best-practices/testing-ui-extensions#order-index',
    },
  ],
  definitions: [CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION],
  type: 'Target',
};

export default data;
