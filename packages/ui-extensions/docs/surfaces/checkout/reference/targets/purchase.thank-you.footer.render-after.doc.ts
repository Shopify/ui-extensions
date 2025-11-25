import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {THANK_YOU_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.footer.render-after',
  description: `A static extension target that is rendered below the footer on the **Thank you** page.

  > Tip:
  > To prevent layout shifting, avoid dynamic data fetching & rendering in this target. If you need to render dynamic content, consider reserving space for your content while it is loading.
  > See: Spinner, SkeletonText, or BlockSpacer.
  `,
  defaultExample: getExample('generic', ['jsx']),
  subCategory: 'Footer',
  related: getLinksByTag('targets'),
  ...THANK_YOU_API,
};

export default data;
