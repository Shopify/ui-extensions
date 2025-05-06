import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  THANK_YOU_CART_LINE_ITEM_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.cart-line-item.render-after',
  description: `A static extension target that renders on every line item, inside the details under the line item properties element.

  > Caution:
  > This extension target will not be rendered if the line item is a custom line item belonging to a draft order invoice.
  `,
  defaultExample: getExample('cart-line-item/default', ['jsx']),
  related: getLinksByTag('targets'),
  ...THANK_YOU_CART_LINE_ITEM_API,
};

export default data;
