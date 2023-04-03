import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtensionApi',
  description: `
Returns the full API object that was passed in to your extension when it was created.
Depending on the extension point, this object can contain different properties.

For example, the \`Checkout::CartLineDetails::RenderAfter\` extension point will return the [CartLineRenderAfterApi](/docs/api/checkout-ui-extensions/apis/cartlinerenderafterapi) object.
Whereas others return the [StandardApi](/docs/api/checkout-ui-extensions/apis/standardapi) object.

For reference, see [ExtensionPoints](/docs/api/checkout-ui-extensions/apis/extensionpoints) to determine what API object will be returned by your extension point.
  `,
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Utilities',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseExtensionApiGeneratedType',
    },
  ],
  defaultExample: getHookExample('api'),
  related: getLinksByTag('apis', 'UseExtensionApiGeneratedType'),
};

export default data;
