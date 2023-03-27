import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinkByType} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useTarget',
  description:
    'Returns the cart line the extension is attached to. This is only applicable to the `Checkout::CartLineDetails::RenderAfter` extension point.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Cart',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseTargetGeneratedType',
    },
  ],
  defaultExample: getHookExample('cart-line-render-after/default'),
  related: [getLinkByType('CartLineRenderAfterApi')],
};

export default data;
