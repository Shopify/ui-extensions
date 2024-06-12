import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  SHIPPING_OPTION_ITEM_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.shipping-option-item.details.render',
  description: `
A static extension target that is rendered under the shipping method within the shipping method option list, for each option.

> Note:
> - In split shipping scenarios, this target is duplicated for each delivery group (shipment), and its value is the selected shipping option for the delivery group.
> - If you are collecting information in this target, you should consider that it needs to be scoped to a specific delivery group in split shipping scenarios. Alternatively, you can move your extension to \`purchase.checkout.shipping-option-list.render-before\` or \`purchase.checkout.shipping-option-list.render-after\`, which are not duplicated for each delivery group.
`,
  defaultExample: getExample(
    'purchase.checkout.shipping-option-item.details.render/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...SHIPPING_OPTION_ITEM_API,
};

export default data;
