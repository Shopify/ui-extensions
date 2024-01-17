import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.actions.render-before',
  description:
    'A static extension target that is rendered immediately before any actions within each step.',
  subCategory: 'Navigation',
  defaultExample: getExample(
    'purchase.checkout.actions.render-before/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
