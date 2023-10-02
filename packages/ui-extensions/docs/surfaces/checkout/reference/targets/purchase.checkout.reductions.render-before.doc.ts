import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, CHECKOUT_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.reductions.render-before',
  description:
    'A static extension target that is rendered in the order summary, before the discount form element.',
  subCategory: 'Order Summary',
  defaultExample: getExample(
    'purchase.checkout.reductions.render-before/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
