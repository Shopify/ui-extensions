import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, CHECKOUT_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.shipping-option-list.render-after',
  description:
    'A static extension target that is rendered after the shipping method options.',
  subCategory: 'Shipping',
  defaultExample: getExample(
    'purchase.checkout.shipping-option-list.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
