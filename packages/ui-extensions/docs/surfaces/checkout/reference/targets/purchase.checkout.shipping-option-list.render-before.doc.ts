import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, CHECKOUT_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.shipping-option-list.render-before',
  description:
    'A static extension target that is rendered between the shipping method header and shipping method options.',
  subCategory: 'Shipping',
  defaultExample: getExample(
    'purchase.checkout.shipping-option-list.render-before/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
