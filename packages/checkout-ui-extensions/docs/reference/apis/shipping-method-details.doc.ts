import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ShippingMethodDetailsApi',
  overviewPreviewDescription:
    'The API provided to extensions rendering after shipping method details and the expanded section of a selected shipping method.',
  description: `
This API object is provided to extensions registered for the \`Checkout::ShippingMethodDetails::RenderAfter\` or \`Checkout::ShippingMethodDetails::RenderExpanded\` extension points.

It extends the [StandardApi](/docs/api/checkout-ui-extensions/apis/standardapi), provides a [target](#properties-propertydetail-target) object with information about the shipping method the extension is attached to, \
and a [targetSelected](#properties-propertydetail-targetselected) boolean indicating whether the shipping method is currently selected in the UI.
`,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'See the [StandardApi examples](/docs/api/checkout-ui-extensions/apis/standardapi#examples) for more information on how to use the API.',
      type: 'ShippingMethodDetailsApi',
    },
  ],
  defaultExample: getExample('shipping-method-details/default', ['jsx', 'js']),
  related: getLinksByTag('apis', 'ShippingMethodDetailsApi'),
};

export default data;
