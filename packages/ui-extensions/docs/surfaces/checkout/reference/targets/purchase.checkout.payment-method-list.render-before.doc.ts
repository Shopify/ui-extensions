import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.payment-method-list.render-before',
  description:
    'A static extension target that renders between the payment heading and payment method list.',
  subCategory: 'Payments',
  defaultExample: getExample(
    'purchase.checkout.payment-method-list.render-before/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
