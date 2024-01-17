import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, PICKUP_POINT_LIST_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.pickup-point-list.render-before',
  description:
    'A static extension target that is rendered immediately before the pickup points.',
  defaultExample: getExample(
    'purchase.checkout.pickup-point-list.render-before/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...PICKUP_POINT_LIST_API,
};

export default data;
