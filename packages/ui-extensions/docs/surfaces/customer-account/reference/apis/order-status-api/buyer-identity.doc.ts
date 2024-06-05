import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  ORDER_STATUS_API_DEFINITION,
  REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Buyer Identity',
  description: 'The API for interacting with the buyer identity.',
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  subCategory: 'Order Status API',
  definitions: [
    {
      title: ORDER_STATUS_API_DEFINITION.title,
      description: ORDER_STATUS_API_DEFINITION.description,
      type: 'Docs_OrderStatus_BuyerIdentityApi',
    },
    {
      title: 'useCustomer',
      description:
        "Returns the current `Customer`. The value is `undefined` if buyer hasn't logged in yet.",
      type: 'UseCustomerGeneratedType',
    },
    {
      title: 'useEmail',
      description:
        'Returns the email address of the buyer that is interacting with the cart. The value is `undefined` if the app does not have access to customer data.',
      type: 'UseEmailGeneratedType',
    },
    {
      title: 'usePhone',
      description:
        'Returns the phone number of the buyer that is interacting with the cart. The value is `undefined` if the app does not have access to customer data.',
      type: 'UsePhoneGeneratedType',
    },
    {
      title: 'usePurchasingCompany',
      description:
        "Provides information about the company and its location that the business customer is purchasing on behalf of during a B2B checkout. It includes details that can be utilized to identify both the company and its corresponding location to which the business customer belongs. \n \n The value is `undefined` if a business customer isn't logged in. This function throws an error if the app doesn't have access to customer data.",
      type: 'UsePurchasingCompanyGeneratedType',
    },
  ],
  related: [
    {
      name: 'Order status page',
      subtitle: 'Limitations',
      url: '/docs/apps/customer-accounts/order-status-page#pre-authenticated-order-status-page',
      type: 'tutorial',
    },
  ],
};

export default data;
