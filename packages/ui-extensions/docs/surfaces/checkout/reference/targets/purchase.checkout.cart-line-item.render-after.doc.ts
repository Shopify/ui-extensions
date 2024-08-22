import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CHECKOUT_CART_LINE_ITEM_API,
  getExample,
  getLinksByTag,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.cart-line-item.render-after',
  description: `A static extension target that renders on every line item, inside the details under the line item properties element.

  > Caution:
  > This extension target will not be rendered if the line item is a custom line item belonging to a draft order invoice.
  `,
  defaultExample: getExample(
    'purchase.checkout.cart-line-item.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_CART_LINE_ITEM_API,
};

export default data;
