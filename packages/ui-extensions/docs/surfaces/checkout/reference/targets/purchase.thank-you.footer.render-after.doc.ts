import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {STANDARD_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.footer.render-after',
  description: `A static extension target that is rendered below the footer on the **Thank you** page.

  > Tip:
  > To prevent layout shifting, avoid dynamic data fetching & rendering in this target. If you need to render dynamic content, consider reserving space for your content while it is loading.
  > See: [Spinner](https://shopify.dev/docs/api/checkout-ui-extensions/components/feedback/spinner), [SkeletonText](https://shopify.dev/docs/api/checkout-ui-extensions/components/feedback/skeletontext), or [BlockSpacer](https://shopify.dev/docs/api/checkout-ui-extensions/unstable/components/structure/blockspacer).
  `,
  defaultExample: getExample('purchase.thank-you.footer.render-after/default', [
    'jsx',
    'js',
  ]),
  subCategory: 'Footer',
  related: getLinksByTag('targets'),
  ...STANDARD_API,
};

export default data;
