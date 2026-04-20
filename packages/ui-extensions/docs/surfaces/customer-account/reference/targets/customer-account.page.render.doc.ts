import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.page.render',
  description: `> Note:
> Customer accounts are getting layout and design updates. Enable the **Customer account improvements** feature preview to get early access. See the [developer changelog](/changelog/feature-preview-customer-account-improvements) and [where extension targets will render](/docs/apps/build/customer-accounts/feature-preview-customer-account-improvements) in the new layout.

This [full-page extension](/docs/api/customer-account-ui-extensions/unstable/extension-targets-overview#full-page-extension-full-page-extension) allows you to create a new page in customer accounts. It renders in the main content area—below the header, and above the footer.\n

If the page you're building is tied to a specific order, use [customer-account.order.page.render](/docs/api/customer-account-ui-extensions/targets/full-page/customer-account-order-page-render) instead.

For example:
- A Return Request page that requires the context of a specific order should use \`customer-account.order.page.render\`
- A Wishlist page that does **not** require the context of a specific order should use \`customer-account.page.render\`

A full-page extension target cannot coexist with any other targets in the same extension.
`,
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Full page',
  related: [],
  definitions: [CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION],
  type: 'Target',
};

export default data;
