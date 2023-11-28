import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {STANDARD_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.header.render-after',
  description:
    'A static extension target that is rendered below the header on the **Thank you** page.',
  defaultExample: getExample('purchase.thank-you.header.render-after/default', [
    'jsx',
    'js',
  ]),
  subCategory: 'Header',
  related: getLinksByTag('targets'),
  ...STANDARD_API,
};

export default data;
