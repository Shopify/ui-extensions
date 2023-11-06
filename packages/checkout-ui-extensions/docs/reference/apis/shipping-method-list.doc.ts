import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ShippingMethodListApi',
  overviewPreviewDescription:
    'The API provided to extensions rendering before and after each shipping group',
  description: `
This API object is provided to extensions registered for the \`Checkout::ShippingMethods::RenderBefore\` or \`Checkout::ShippingMethods::RenderAfter\` extension points.

It extends the [StandardApi](/docs/api/checkout-ui-extensions/apis/standardapi) and provides a [deliveryGroupId](#properties-propertydetail-target) object with information about the shipping group the extension is attached to.
`,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'See the [StandardApi examples](/docs/api/checkout-ui-extensions/apis/standardapi#examples) for more information on how to use the API.',
      type: 'ShippingMethodListApi',
    },
  ],
  defaultExample: getExample('shipping-method-list/default', ['jsx', 'js']),
  related: getLinksByTag('apis', 'ShippingMethodListApi'),
};

export default data;
