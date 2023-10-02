import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.delivery-address.render-before',
  description:
    'A static extension target that is rendered between the shipping address header and shipping address form elements.',
  subCategory: 'Shipping',
  defaultExample: getExample(
    'purchase.checkout.delivery-address.render-before/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
