import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.chat.render',
  description: `
<<<<<<< HEAD
A static extension target that floats above checkout pages in the bottom right corner of the screen.

> Note: This target only accepts the [Chat](https://shopify.dev/docs/api/checkout-ui-extensions/unstable/components/overlays/chat) component. Any other components will not render.
=======
A static extension target that floats above the checkout in the bottom right corner of the screen.

> Note: This target only accepts the [Chat](https://shopify.dev/docs/api/checkout-ui-extensions/latest/components/overlays/chat) component. Any other components will not render.
>>>>>>> cc96bc544 ([checkout] Update to 8a702e0c1ea83ccac07e2f79c060d23fd68038f9)
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
