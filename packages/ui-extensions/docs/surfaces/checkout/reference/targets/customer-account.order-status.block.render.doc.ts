import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  ORDER_STATUS_API,
  ORDER_STATUS_SURFACE_NOTE,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.block.render',
  description: `A [block extension target](/docs/api/checkout-ui-extensions/extension-targets-overview#block-extension-targets) that renders exclusively on the **Order status** page. Unlike static extension targets, block extension targets render where the merchant sets them using the [checkout editor](/docs/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).

  The [placements](/docs/api/checkout-ui-extensions/extension-targets-overview#placements) for block extension targets can be previewed during development by [using a URL parameter](/docs/apps/checkout/best-practices/testing-ui-extensions#block-extension-targets).

  ${ORDER_STATUS_SURFACE_NOTE}
  `,
  subCategory: 'Block',
  defaultExample: getExample(
    'customer-account.order-status.block.render/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...ORDER_STATUS_API,
};

export default data;
