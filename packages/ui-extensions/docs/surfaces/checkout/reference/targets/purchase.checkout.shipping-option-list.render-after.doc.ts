import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  SHIPPING_OPTION_LIST_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.shipping-option-list.render-after',
  description:
    'A static extension target that is rendered after the shipping method options.',
  defaultExample: getExample(
    'purchase.checkout.shipping-option-list.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...SHIPPING_OPTION_LIST_API,
};

export default data;
