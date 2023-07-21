import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ExtensionTargets',
  overviewPreviewDescription:
    'The extension targets and the APIs they provide.',
  description: `
A target represents where your checkout UI extension will appear.

You register your [targets](/docs/api/checkout-ui-extensions/extension-targets-overview) within your [configuration](/docs/api/checkout-ui-extensions/configuration) and register a JavaScript function to execute the code for the corresponding target.

The API for each extension target is passed as an argument to your function. While all targets inherit the [StandardApi](/docs/api/checkout-ui-extensions/apis/standardapi), not all of them share the same properties and methods.

For example, the [Checkout::CartLineDetails::RenderAfter](#typesofextensiontargets-propertydetail-checkoutcartlinedetailsrenderafter) target has access to the \`CheckoutApi\` to modify a checkout.
Whereas the [Checkout::ThankYou::CartLineDetails::RenderAfter](#typesofextensiontargets-propertydetail-checkoutthankyoucartlinedetailsrenderafter) cannot.
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
