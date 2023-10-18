import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag, CART_LINE_ITEM_API} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.cart-line-item.line-components.render',
  description:
    'A static extension target that renders on every line item, inside the details under the line item properties element. It replaces the default bundle products rendering.',
  defaultExample: getExample(
    'purchase.cart-line-item.line-components.render/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...CART_LINE_ITEM_API,
};

export default data;
