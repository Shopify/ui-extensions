import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  CHECKOUT_API_PROPERTIES_DESCRIPTION,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Gift Cards',
  description: 'The API for interacting with gift cards.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_GiftCardsApi',
    },
    {
      title: 'CheckoutApi',
      description: CHECKOUT_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Checkout_GiftCardsApi',
    },
    {
      title: 'useAppliedGiftCards',
      description: 'Returns the current gift cards applied to the cart.',
      type: 'UseAppliedGiftCardsGeneratedType',
    },
    {
      title: 'useApplyGiftCardChange',
      description: 'Returns a function to add or remove gift cards.',
      type: 'UseApplyGiftCardChangeGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
