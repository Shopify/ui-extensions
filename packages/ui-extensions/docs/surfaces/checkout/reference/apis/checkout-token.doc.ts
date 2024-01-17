import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkout Token',
  description: 'The API for interacting with the token of a checkout.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_CheckoutTokenApi',
    },
    {
      title: 'useCheckoutToken',
      description: 'Returns a stable id that represents the current checkout.',
      type: 'UseCheckoutTokenGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
