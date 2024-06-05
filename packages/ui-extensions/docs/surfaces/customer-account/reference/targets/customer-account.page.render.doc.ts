import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CUSTOMER_ACCOUNT_FULL_PAGE_API_DEFINITION,
  CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.page.render',
  description: `This [full-page extension](/docs/api/customer-account-ui-extensions/extension-targets-overview#full-page-extension-target) allows you to create a new page in customer accounts. It renders in the main content area, below the header, and above the footer.`,
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Full-page',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Customer account wishlist full-page extension example',
      tabs: [
        {
          code: '../examples/targets/customer-account.page.render/default.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/targets/customer-account.page.render/default.example.ts',
          language: 'js',
          title: 'Javascript',
        },
      ],
    },
  },
  related: [],
  definitions: [
    CUSTOMER_ACCOUNT_FULL_PAGE_API_DEFINITION,
    CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  ],
  type: 'Target',
};

export default data;
