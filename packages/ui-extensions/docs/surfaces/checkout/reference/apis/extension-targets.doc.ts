import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ExtensionTargets',
  overviewPreviewDescription:
    'The extension targets and the APIs they provide.',
  description: `
A [target](/docs/apps/app-extensions/configuration#targets) represents where your checkout UI extension will appear.

You register for [targets](/docs/api/checkout-ui-extensions/extension-targets-overview) in your [configuration file](/docs/api/checkout-ui-extensions/configuration), and you include a JavaScript function that will run at that location in checkout.

The API for each extension target is passed as an argument to your function. While all targets inherit the [\`StandardApi\`](/docs/api/checkout-ui-extensions/apis/standardapi), not all of them share the same properties and methods.

For example, the [\`purchase.checkout.cart-line-item.render-after\`](#typesofextensiontargets-propertydetail-purchasecheckoutcartlineitemrenderafter) target has access to the [\`CheckoutApi\`](/docs/api/checkout-ui-extensions/apis/checkoutapi) to modify a checkout, but the [\`purchase.thank-you.cart-line-item.render-after\`](#typesofextensiontargets-propertydetail-purchasethankyoucartlineitemrenderafter) target does not.
  `,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Types of extension targets',
      description:
        'See a [visual representation](/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) of each extension target.',
      type: 'ExtensionTargets',
    },
  ],
  defaultExample: getExample('extension-targets', ['jsx', 'js']),
  related: getLinksByTag('apis', 'ExtensionTargets'),
};

export default data;
