import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  ORDER_STATUS_CART_LINE_ITEM_API,
  ORDER_STATUS_SURFACE_NOTE,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.cart-line-item.render-after',
  description: `
  A static extension target that renders on every line item, inside the details under the line item properties element on the **Order status** page.

  ${ORDER_STATUS_SURFACE_NOTE}
  `,
  defaultExample: getExample(
    'customer-account.order-status.cart-line-item.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...ORDER_STATUS_CART_LINE_ITEM_API,
};

export default data;
