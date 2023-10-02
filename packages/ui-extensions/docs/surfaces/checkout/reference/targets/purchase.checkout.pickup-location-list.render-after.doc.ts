import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  PICKUP_LOCATION_LIST_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.pickup-location-list.render-after',
  description:
    'A static extension target that is rendered after pickup location options.',
  defaultExample: getExample(
    'purchase.checkout.pickup-location-list.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...PICKUP_LOCATION_LIST_API,
};

export default data;
