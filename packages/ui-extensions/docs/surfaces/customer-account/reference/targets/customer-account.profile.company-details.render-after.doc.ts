import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.profile.company-details.render-after',
  description: `A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders on the Profile page in customer accounts—for B2B customers only. It renders after the company name, and before company location information.`,
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Profile (B2B)',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account company details extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.profile.company-details.render-after/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.profile.company-details.render-after/default.example.ts',
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
