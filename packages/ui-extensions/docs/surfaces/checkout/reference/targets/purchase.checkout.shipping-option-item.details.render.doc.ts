import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  SHIPPING_OPTION_ITEM_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.shipping-option-item.details.render',
  description:
    'A static extension target that is rendered under the shipping method within the shipping method option list, for each option.',
  defaultExample: getExample(
    'purchase.checkout.shipping-option-item.details.render/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...SHIPPING_OPTION_ITEM_API,
};

export default data;
