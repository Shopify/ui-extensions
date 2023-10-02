import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.cart-line-list.render-after',
  description:
    'A static extension target that is rendered after all line items.',
  subCategory: 'Order Summary',
  defaultExample: getExample(
    'purchase.checkout.cart-line-list.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
