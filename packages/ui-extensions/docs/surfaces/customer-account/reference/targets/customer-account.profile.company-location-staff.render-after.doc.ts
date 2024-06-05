import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  COMPANY_LOCATION_API,
  CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.profile.company-location-staff.render-after',
  description: `A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that renders on the Profile page in customer accounts—for B2B customers only. It renders after the Staff and permissions section for the company location.`,
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Profile (B2B)',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account company location staff extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.profile.company-location-staff.render-after/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.profile.company-location-staff.render-after/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  related: [],
  definitions: [COMPANY_LOCATION_API, CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION],
  type: 'Target',
};

export default data;
