import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.footer.render-after',
  description: `A static extension target that is rendered below the footer.

  > Tip:
  > To prevent layout shifting, avoid dynamic data fetching & rendering in this target. If you need to render dynamic content, consider reserving space for your content while it is loading.
  > See: Spinner, SkeletonText, or BlockSpacer.
  `,
  defaultExample: getExample('generic', ['jsx']),
  subCategory: 'Footer',
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
