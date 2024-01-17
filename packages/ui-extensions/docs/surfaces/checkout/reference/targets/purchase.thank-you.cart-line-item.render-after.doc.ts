import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, CART_LINE_ITEM_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.cart-line-item.render-after',
  description:
    'A static extension target that renders on every line item, inside the details under the line item properties element on the **Thank you** page.',
  defaultExample: getExample(
    'purchase.thank-you.cart-line-item.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CART_LINE_ITEM_API,
};

export default data;
