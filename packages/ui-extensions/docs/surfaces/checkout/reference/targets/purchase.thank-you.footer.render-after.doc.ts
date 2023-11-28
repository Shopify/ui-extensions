import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {STANDARD_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.thank-you.footer.render-after',
  description:
    'A static extension target that is rendered below the footer on the **Thank you** page.',
  defaultExample: getExample('purchase.thank-you.footer.render-after/default', [
    'jsx',
    'js',
  ]),
  subCategory: 'Footer',
  related: getLinksByTag('targets'),
  ...STANDARD_API,
};

export default data;
