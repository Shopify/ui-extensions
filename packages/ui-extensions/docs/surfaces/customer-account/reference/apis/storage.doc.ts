import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Storage',
  description: 'The API for interacting with local storage.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_StorageApi',
    },
    {
      title: 'useStorage',
      description:
        'Returns the key-value `Storage` interface for the extension target.',
      type: 'UseStorageGeneratedType',
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
