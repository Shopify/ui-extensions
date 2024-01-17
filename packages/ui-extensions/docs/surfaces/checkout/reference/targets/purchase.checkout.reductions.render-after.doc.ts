import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, CHECKOUT_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.reductions.render-after',
  description:
    'A static extension target that is rendered in the order summary, after the discount form and discount tag elements.',
  subCategory: 'Order Summary',
  defaultExample: getExample(
    'purchase.checkout.reductions.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
