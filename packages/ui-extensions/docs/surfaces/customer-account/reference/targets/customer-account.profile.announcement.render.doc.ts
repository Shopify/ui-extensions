import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.profile.announcement.render',
  description: `A static extension target that is rendered on top of the **Profile page** as a dismissable announcement.`,
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/targets/customer-account.profile.announcement.render/default.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  subCategory: 'Profile (Default)',
  related: [
    {
      name: 'Placement references',
      subtitle: 'Navigate to',
      url: '/docs/apps/customer-accounts/best-practices/testing-ui-extensions#profile',
    },
  ],
  definitions: [CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION],
  category: 'Targets',
  isVisualComponent: false,
};

export default data;
