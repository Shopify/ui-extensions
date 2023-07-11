import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useSelectedPaymentOptions',
  description: '',
  descriptionType: 'UseSelectedPaymentOptionsGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Payments',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseSelectedPaymentOptionsGeneratedType',
    },
  ],
  defaultExample: getHookExample('payments/use-selected-payment-options'),
  related: [
    {
      name: 'useAvailablePaymentOptions',
      subtitle: 'Hook',
      url: '/docs/api/checkout-ui-extensions/unstable/react-hooks/payments/useavailablepaymentoptions',
      type: 'UseAvailablePaymentOptionsGeneratedType',
    },
    ...getLinksByTag('apis'),
  ],
};

export default data;
