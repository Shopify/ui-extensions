import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Authenticated Account',
  description:
    'The API for interacting with an account in which the customer is fully authenticated.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_AuthenticatedAccountApi',
    },
    {
      title: 'useAuthenticatedAccountCustomer',
      description:
        "Returns the current authenticated `Customer`. The value is `undefined` if the customer isn't authenticated.",
      type: 'UseAuthenticatedAccountCustomerGeneratedType',
    },
    {
      title: 'useAuthenticatedAccountPurchasingCompany',
      description:
        "Provides information about the company of the authenticated business customer. The value is `undefined` if a business customer isn't authenticated.",
      type: 'UseAuthenticatedAccountPurchasingCompanyGeneratedType',
    },
  ],
  related: [],
};

export default data;
