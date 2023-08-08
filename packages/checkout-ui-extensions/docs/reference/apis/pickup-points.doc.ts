import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PickupPointsApi',
  overviewPreviewDescription:
    'The API provided to extensions rendering before and after pickup points.',
  description: `
This API object is provided to extensions registered for the \`Checkout::PickupPoints::RenderBefore\` or \`Checkout::PickupPoints::RenderAfter\` extension points.

It extends the [StandardApi](/docs/api/checkout-ui-extensions/apis/standardapi) and provides a [isLocationFormVisible](#properties-propertydetail-islocationformvisible) boolean to indicate whether the customer location input form is currently rendered and shown to the buyer.
`,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'See the [StandardApi examples](/docs/api/checkout-ui-extensions/apis/standardapi#examples) for more information on how to use the API.',
      type: 'PickupPointsApi',
    },
  ],
  defaultExample: getExample('pickup-points/default', ['jsx', 'js']),
  related: getLinksByTag('apis', 'PickupPointsApi'),
};

export default data;
