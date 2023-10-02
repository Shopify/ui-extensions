import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, PICKUP_POINT_LIST_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.pickup-point-list.render-after',
  description:
    'A static extension target that is rendered immediately after the pickup points.',
  defaultExample: getExample(
    'purchase.checkout.pickup-point-list.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...PICKUP_POINT_LIST_API,
};

export default data;
