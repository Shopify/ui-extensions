import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getHookExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Payments',
  description: 'The API for interacting with the payment options.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_PaymentOptionsApi',
    },
    {
      title: 'useAvailablePaymentOptions',
      description: 'Returns all available payment options.',
      type: 'UseAvailablePaymentOptionsGeneratedType',
    },
    {
      title: 'useSelectedPaymentOptions',
      description: 'Returns payment options selected by the buyer.',
      type: 'UseSelectedPaymentOptionsGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
  defaultExample: getHookExample('payments/use-available-payment-options'),
  examples: {
    description: '',
    examples: [getHookExample('payments/use-selected-payment-options')],
  },
};

export default data;
