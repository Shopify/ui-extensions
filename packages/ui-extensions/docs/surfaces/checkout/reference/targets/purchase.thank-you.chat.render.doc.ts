import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {THANK_YOU_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.chat.render',
  description: `
A static extension target that floats above the Thank you page in the bottom right corner of the screen.

> Note: This target only accepts the [Chat](https://shopify.dev/docs/api/checkout-ui-extensions/unstable/components/overlays/chat) component. Any other components will not render.
  `,
  defaultExample: getExample('purchase.thank-you.chat.render/default', [
    'jsx',
    'js',
  ]),
  subCategory: 'Overlays',
  related: getLinksByTag('targets'),
  ...THANK_YOU_API,
};

export default data;
