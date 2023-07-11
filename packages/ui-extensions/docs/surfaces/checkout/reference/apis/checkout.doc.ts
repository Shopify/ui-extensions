import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'CheckoutApi',
  overviewPreviewDescription:
    'The API provided to extensions before the purchase is completed.',
  description: `
This API object is provided to extensions registered for the extension points that appear exclusively pre-purchase.

It extends the [StandardApi](/docs/api/checkout-ui-extensions/apis/standardapi) and provides the write apis for the checkout data.
`,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'See the [StandardApi examples](/docs/api/checkout-ui-extensions/apis/standardapi#examples) for more information on how to use the API.',
      type: 'CheckoutApi',
    },
  ],
  defaultExample: getExample('checkout/default', ['jsx', 'js']),
  related: getLinksByTag('apis', 'CheckoutApi'),
};

export default data;
