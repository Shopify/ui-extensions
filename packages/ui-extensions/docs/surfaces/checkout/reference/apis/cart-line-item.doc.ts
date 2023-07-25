import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'CartLineItemApi',
  overviewPreviewDescription:
    'The API provided to extensions which target cart line items.',
  description: `
This API object is provided to extensions registered for the \`purchase.cart-line-item.line-components.render\`, \`purchase.checkout.cart-line-item.render-after\`, \`purchase.thank-you.cart-line-item.render-after\`, and \`customer-account.order-status.cart-line-item.render-after\` extension targets.

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
      type: 'CartLineItemApi',
    },
  ],
  defaultExample: getExample('cart-line-item/default', ['jsx', 'js']),
  related: getLinksByTag('apis', 'CartLineItemApi'),
};

export default data;
