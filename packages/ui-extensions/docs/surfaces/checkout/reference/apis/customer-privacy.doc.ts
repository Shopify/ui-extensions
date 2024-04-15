import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Privacy',
  description:
    "The API for interacting with a customer's privacy consent. It is similar to the [Customer Privacy API in storefront](/docs/api/customer-privacy).",
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      // replace with STANDARD_API_PROPERTIES_DESCRIPTION after Customer Privacy API has been added to customer accounts
      description:
        'The base API object provided to `purchase` extension targets.',
      type: 'Docs_Standard_CustomerPrivacyApi',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
