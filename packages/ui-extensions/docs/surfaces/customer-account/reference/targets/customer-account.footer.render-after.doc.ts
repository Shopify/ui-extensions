import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.footer.render-after',
  description: `A [static extension target](/docs/api/customer-account-ui-extensions/extension-targets-overview#static-extension-targets) that is rendered below \
the footer on all customer account pages (**Order index**, **Order status**, **Profile**, **Settings** and new pages added by [Full-page extensions](/docs/api/customer-account-ui-extensions/extension-targets-overview#full-page-extension-target)).
  
> Tip:
> To prevent layout shifting, avoid dynamic data fetching & rendering in this target. If you need to render dynamic content, consider reserving space for your content while it is loading.
> See: [Spinner](/docs/api/checkout-ui-extensions/web-components/feedback/spinner), [SkeletonParagraph](/docs/api/checkout-ui-extensions/web-components/feedback/skeletonparagraph), or [Stack](/docs/api/checkout-ui-extensions/web-components/structure/stack).
`,
  category: 'Targets',
  isVisualComponent: false,
  subCategory: 'Footer',
  defaultExample: {
    description: '',
    codeblock: {
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/targets/customer-account.footer.render-after/default.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  definitions: [CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION],
  related: [],
  type: 'Target',
};

export default data;
