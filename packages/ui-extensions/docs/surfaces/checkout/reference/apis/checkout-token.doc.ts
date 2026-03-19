import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  getExample,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkout Token API',
  description: 'The API for interacting with the token of a checkout.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Checkout APIs',
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
  defaultExample: getExample('checkout-token/default', ['jsx']),
  examples: {
    description: '',
    examples: [getExample('checkout-token/support-message', ['jsx'])],
  },
  related: getLinksByTag('apis'),
};

export default data;
