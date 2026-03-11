import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Privacy API',
  description:
    "The API for interacting with a customer's privacy consent. It is similar to the [Customer Privacy API in storefront](/docs/api/customer-privacy).",
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  category: 'Target APIs',
  subCategory: 'Checkout APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      // replace with STANDARD_API_PROPERTIES_DESCRIPTION after Customer Privacy API has been added to customer accounts
      description:
        'The base API object provided to `purchase` extension targets.',
      type: 'Docs_Standard_CustomerPrivacyApi',
    },
    {
      title: 'useCustomerPrivacy',
      description:
        'Returns the current customer privacy settings and metadata and re-renders your component if the customer privacy settings change.',
      type: 'UseCustomerPrivacyGeneratedType',
    },
  ],
  defaultExample: getExample('customer-privacy/default', ['jsx']),
  related: getLinksByTag('apis'),
};

export default data;
