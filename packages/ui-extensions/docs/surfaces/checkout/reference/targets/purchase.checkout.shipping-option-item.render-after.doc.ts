import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  SHIPPING_OPTION_ITEM_API,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'purchase.checkout.shipping-option-item.render-after',
  description: `
A static extension target that is rendered after the shipping method details within the shipping method option list, for each option.

> Note:
> In split shipping scenarios, this target will render within a Modal when \`renderMode.overlay\` is true. In this case, it is recommended to avoid using components that render an overlay such as Modals.
`,
  defaultExample: getExample(
    'purchase.checkout.shipping-option-item.render-after/default',
    ['jsx', 'js'],
  ),
  related: getLinksByTag('targets'),
  ...SHIPPING_OPTION_ITEM_API,
};

export default data;
