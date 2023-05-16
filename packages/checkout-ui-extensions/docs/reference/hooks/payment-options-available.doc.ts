import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useAvailablePaymentOptions',
  description: '',
  descriptionType: 'UseAvailablePaymentOptionsGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Payments',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseAvailablePaymentOptionsGeneratedType',
    },
  ],
  defaultExample: getHookExample('payments/use-available-payment-options'),
  related: [
    {
      name: 'useSelectedPaymentOptions',
      subtitle: 'Hook',
      url: '/docs/api/checkout-ui-extensions/unstable/react-hooks/payments/useselectedpaymentoptions',
      type: 'UseSelectedPaymentOptionsGeneratedType',
    },
    ...getLinksByTag('apis'),
  ],
};

export default data;
