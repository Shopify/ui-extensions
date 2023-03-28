import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'CartLineRenderAfterApi',
  overviewPreviewDescription:
    'The API provided to extensions which target cart line details.',
  description: `
This API object is provided to extensions registered for the \`Checkout::CartLineDetails::RenderAfter\` extension point.

It extends the [StandardApi](/docs/api/checkout-ui-extensions/apis/standardapi) and provides the [target](#properties-propertydetail-target) cart line item associated with the extension.
`,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'See the [StandardApi examples](/docs/api/checkout-ui-extensions/apis/standardapi#examples) for more information on how to use the API.',
      type: 'CartLineRenderAfterApi',
    },
  ],
  defaultExample: getExample('cart-line-render-after/default', ['jsx', 'js']),
  related: getLinksByTag('apis', 'CartLineRenderAfterApi'),
};

export default data;
