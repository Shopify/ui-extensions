import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
  CHECKOUT_API_PROPERTIES_DESCRIPTION,
  REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Addresses',
  description: 'The API for interacting with addresses.',
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_AddressApi',
    },
    {
      title: 'CheckoutApi',
      description: CHECKOUT_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Checkout_AddressApi',
    },
    {
      title: 'useBillingAddress',
      description:
        'Returns the proposed `billingAddress` applied to the checkout.',
      type: 'UseBillingAddressGeneratedType',
    },
    {
      title: 'useShippingAddress',
      description:
        'Returns the proposed `shippingAddress` applied to the checkout.',
      type: 'UseShippingAddressGeneratedType',
    },
    {
      title: 'useApplyShippingAddressChange',
      description:
        'Returns a function to mutate the `shippingAddress` property of checkout.',
      type: 'UseApplyShippingAddressChangeGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
