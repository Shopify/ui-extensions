import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.block.render',
  description: `A [block extension target](/docs/api/checkout-ui-extensions/extension-targets-overview#block-extension-targets) that isn't tied to a specific checkout section or feature. Unlike static extension targets, block extension targets render where the merchant sets them using the [checkout editor](/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).

  The [placements](/docs/api/checkout-ui-extensions/extension-targets-overview#placements) for block extension targets can be previewed during development by [using a URL parameter](/docs/apps/checkout/best-practices/testing-ui-extensions#block-extension-targets).`,
  subCategory: 'Block',
  defaultExample: getExample('purchase.checkout.block.render/default', [
    'jsx',
    'js',
  ]),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
