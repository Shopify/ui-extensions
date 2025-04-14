import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CUSTOMER_ACCOUNT_FULL_PAGE_API_DEFINITION,
  CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  ORDER_STATUS_API_DEFINITION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order.page.render',
  description: `This [full-page extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#full-page-extension-full-page-extension-(order-specific)) allows you to create a new page in customer accounts, **tied to a specific order**. It renders in the main content area—below the header, and above the footer.
  
If the page you're building is not tied to a specific order, use [customer-account.page.render](/docs/api/customer-account-ui-extensions/targets/full-page/customer-account-page-render) instead.

For example:
- A Return Request page that requires the context of a specific order should use \`customer-account.order.page.render\`
- A Wishlist page that does **not** require the context of a specific order should use \`customer-account.page.render\`

A full-page extension target cannot coexist with any other targets in the same extension.
`,
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Full page',
  related: [],
  definitions: [
    CUSTOMER_ACCOUNT_FULL_PAGE_API_DEFINITION,
    ORDER_STATUS_API_DEFINITION,
    CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  ],
  type: 'Target',
};

export default data;
