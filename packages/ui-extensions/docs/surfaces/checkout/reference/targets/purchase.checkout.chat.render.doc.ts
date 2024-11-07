import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.chat.render',
  description: `
A static extension target that floats above the checkout in the bottom right corner of the screen.

> Note: This target only accepts the [Chat](https://shopify.dev/docs/api/checkout-ui-extensions/unstable/components/overlays/chat) component. Any other components will not render.
  `,
  defaultExample: getExample('purchase.checkout.chat.render/default', [
    'jsx',
    'js',
  ]),
  subCategory: 'Overlays',
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
