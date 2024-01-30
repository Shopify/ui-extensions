import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  PICKUP_LOCATION_ITEM_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.pickup-location-option-item.render-after',
  description:
    'A static extension target that is rendered after the pickup location details within the local pickup option list, for each option.',
  defaultExample: getExample(
    'purchase.checkout.pickup-location-option-item.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...PICKUP_LOCATION_ITEM_API,
};

export default data;
