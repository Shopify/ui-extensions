import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.header.render-after',
  description: `A static extension target that is rendered below the header.

  > Tip:
  > To prevent layout shifting, avoid dynamic data fetching & rendering in this target. If you need to render dynamic content, consider reserving space for your content while it is loading.
  > See: [Spinner](https://shopify.dev/docs/api/checkout-ui-extensions/components/feedback/spinner), [SkeletonText](https://shopify.dev/docs/api/checkout-ui-extensions/components/feedback/skeletontext), or [BlockSpacer](https://shopify.dev/docs/api/checkout-ui-extensions/components/structure/blockspacer).
  `,
  defaultExample: getExample('purchase.checkout.header.render-after/default', [
    'jsx',
    'js',
  ]),
  subCategory: 'Header',
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
