import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.header.render-after',
  description: 'A static extension target that is rendered below the header.',
  defaultExample: getExample('purchase.checkout.header.render-after/default', [
    'jsx',
    'js',
  ]),
  subCategory: 'Header',
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
