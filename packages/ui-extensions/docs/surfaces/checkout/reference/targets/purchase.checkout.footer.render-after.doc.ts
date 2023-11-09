import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.footer.render-after',
  description: 'A static extension target that is rendered below the footer.',
  defaultExample: getExample('purchase.checkout.footer.render-after/default', [
    'jsx',
    'js',
  ]),
  subCategory: 'Footer',
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
