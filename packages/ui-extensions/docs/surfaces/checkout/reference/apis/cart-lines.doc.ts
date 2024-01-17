import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  STANDARD_API_PROPERTIES_DESCRIPTION,
  CHECKOUT_API_PROPERTIES_DESCRIPTION,
  getLinksByTag,
  getExample,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Lines',
  description: 'The API for interacting with the cart lines.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_CartLinesApi',
    },
    {
      title: 'useCartLines',
      description:
        'Returns the current line items for the checkout, and automatically re-renders your component if line items are added, removed, or updated.',
      type: 'UseCartLinesGeneratedType',
    },
    {
      title: 'CheckoutApi',
      description: CHECKOUT_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Checkout_CartLinesApi',
    },
    {
      title: 'useApplyCartLinesChange',
      description:
        'Returns a function to mutate the `lines` property of checkout.',
      type: 'UseApplyCartLinesChangeGeneratedType',
    },
    {
      title: 'CartLineItemApi',
      description:
        'The API object provided to `cart-line-item` extension targets.',
      type: 'Docs_CartLineItem_CartLinesApi',
    },
    {
      title: 'useTarget',
      description:
        'Returns the cart line the extension is attached to. This hook can only be used by `cart-line-item` extension targets. Until version `2023-04`, this hook returned a `PresentmentCartLine object`.',
      type: 'UseTargetGeneratedType',
    },
    {
      title: 'useCartLineTarget',
      description:
        'Returns the cart line the extension is attached to. This hook can only be used by `cart-line-item` extension targets',
      type: 'UseCartLineTargetGeneratedType',
    },
  ],
  defaultExample: getExample('cart-line-item/default', ['jsx', 'js']),
  related: getLinksByTag('apis'),
};

export default data;
