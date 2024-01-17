import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  SHIPPING_OPTION_LIST_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.shipping-option-list.render-before',
  description:
    'A static extension target that is rendered between the shipping method header and shipping method options.',
  defaultExample: getExample(
    'purchase.checkout.shipping-option-list.render-before/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...SHIPPING_OPTION_LIST_API,
};

export default data;
