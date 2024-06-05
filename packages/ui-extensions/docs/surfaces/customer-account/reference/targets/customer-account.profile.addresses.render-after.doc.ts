import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.profile.addresses.render-after',
  description: `A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders in the Addresses section of the Profile page in customer accounts. This does not show to B2B customers.`,
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Profile (Default)',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account addresses extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.profile.addresses.render-after/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.profile.addresses.render-after/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  related: [],
  definitions: [CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION],
  type: 'Target',
};

export default data;
