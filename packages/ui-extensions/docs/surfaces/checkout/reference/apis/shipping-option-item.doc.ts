import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ShippingOptionItemApi',
  overviewPreviewDescription:
    'The API provided to extensions rendering after shipping options and in the expanded section of a selected shipping option.',
  description: `
This API object is provided to extensions registered for the \`purchase.checkout.shipping-option-item.render-after\` or \`purchase.checkout.shipping-option-item.details.render\` extension targets.

It extends the [\`StandardApi\`](/docs/api/checkout-ui-extensions/apis/standardapi), provides a [\`target\`](#properties-propertydetail-target) object with information about the shipping method the extension is attached to, \
and a [\`isTargetSelected\`](#properties-propertydetail-istargetselected) boolean indicating whether the shipping method is currently selected in the UI.
`,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'See the [StandardApi examples](/docs/api/checkout-ui-extensions/apis/standardapi#examples) for more information on how to use the API.',
      type: 'ShippingOptionItemApi',
    },
  ],
  defaultExample: getExample('shipping-option-item/default', ['jsx', 'js']),
  related: getLinksByTag('apis', 'ShippingOptionItemApi'),
};

export default data;
