import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CHECKOUT_API, getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.payment-method-list.render-after',
  description:
    'A static extension target that renders below the list of payment methods.',
  subCategory: 'Payments',
  defaultExample: getExample('checkout/default', ['jsx']),
  related: getLinksByTag('targets'),
  ...CHECKOUT_API,
};

export default data;
