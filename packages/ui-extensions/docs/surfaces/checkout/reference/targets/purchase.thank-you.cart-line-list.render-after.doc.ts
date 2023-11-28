import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, STANDARD_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.cart-line-list.render-after',
  description:
    'A static extension target that is rendered after all line items on the **Thank you** page.',
  subCategory: 'Order Summary',
  defaultExample: getExample(
    'purchase.thank-you.cart-line-list.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...STANDARD_API,
};

export default data;
