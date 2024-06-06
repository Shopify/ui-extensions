import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.profile.block.render',
  description: `A [block extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#block-extension-targets) that renders exclusively on the Profile page in customer accounts. This extension target renders for all customers, including B2B customers. \

  Merchants can choose to place this extension in any of the supported locations. To preview your extension in each supported location, use the placement reference for that location as a URL parameter.`,
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Profile (Default)',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account profile extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.profile.block.render/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.profile.block.render/default.example.ts',
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
      url: '/docs/apps/customer-accounts/best-practices/testing-ui-extensions#profile',
    },
  ],
  definitions: [CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION],
  type: 'Target',
};

export default data;
