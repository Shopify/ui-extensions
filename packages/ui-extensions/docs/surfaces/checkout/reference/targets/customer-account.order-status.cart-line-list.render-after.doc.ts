import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  ORDER_STATUS_API,
  ORDER_STATUS_SURFACE_NOTE,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'customer-account.order-status.cart-line-list.render-after',
  description: `
  A static extension target that is rendered after all line items on the Order Status page.

  ${ORDER_STATUS_SURFACE_NOTE}
  `,
  subCategory: 'Order Summary',
  defaultExample: getExample(
    'customer-account.order-status.cart-line-list.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...ORDER_STATUS_API,
};

export default data;
