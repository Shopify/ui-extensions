import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CUSTOMER_ACCOUNT_FULL_PAGE_API_DEFINITION,
  CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.page.render',
  description: `This [full-page extension](/docs/api/customer-account-ui-extensions/unstable/extension-targets-overview#full-page-extension-full-page-extension) allows you to create a new page in customer accounts. It renders in the main content area—below the header, and above the footer.\n

If the page you're building is tied to a specific order, use [customer-account.order.page.render](/docs/api/customer-account-ui-extensions/targets/full-page/customer-account-order-page-render) instead.

For example:
- A Return Request page that requires the context of a specific order should use customer-account.order.page.render
- A Wishlist page that does **not** require the context of a specific order should use customer-account.page.render
`,
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Full page',
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
