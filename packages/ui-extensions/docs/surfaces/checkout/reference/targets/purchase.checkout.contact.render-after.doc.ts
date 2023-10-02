import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.contact.render-after',
  description:
    'A static extension target that is rendered immediately after the contact form element.',
  subCategory: 'Information',
  defaultExample: getExample('purchase.checkout.contact.render-after/default', [
    'jsx',
    'js',
  ]),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
