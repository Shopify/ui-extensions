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
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/targets/customer-account.profile.addresses.render-after/default.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  related: [],
  definitions: [CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION],
  type: 'Target',
};

export default data;
