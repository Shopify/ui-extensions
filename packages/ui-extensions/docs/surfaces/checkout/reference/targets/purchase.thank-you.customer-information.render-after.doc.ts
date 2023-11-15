import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, STANDARD_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.customer-information.render-after',
  description:
    'A static extension target that is rendered after a purchase below the customer information on the **Thank you** page.',
  subCategory: 'Information',
  defaultExample: getExample(
    'purchase.thank-you.customer-information.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...STANDARD_API,
};

export default data;
