import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, THANK_YOU_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.block.render',
  description: `A [block extension target](/docs/api/checkout-ui-extensions/extension-targets-overview#block-extension-targets) that renders exclusively on the **Thank you** page. Unlike static extension targets, block extension targets render where the merchant sets them using the [checkout editor](/docs/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).

  The [placements](/docs/api/checkout-ui-extensions/extension-targets-overview#placements) for block extension targets can be previewed during development by [using a URL parameter](/docs/apps/checkout/best-practices/testing-ui-extensions#block-extension-targets).`,
  subCategory: 'Block',
  defaultExample: getExample('purchase.thank-you.block.render/default', [
    'jsx',
    'js',
  ]),
  related: getLinksByTag('targets'),
  ...THANK_YOU_API,
};

export default data;
