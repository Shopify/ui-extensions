import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.delivery-address.render-after',
  description:
    'A static extension target that is rendered after the shipping address form elements.',
  subCategory: 'Shipping',
  defaultExample: getExample(
    'purchase.checkout.delivery-address.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
