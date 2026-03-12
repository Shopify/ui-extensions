import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Extension API',
  description: 'The API for interacting with the metadata of an extension.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_ExtensionApi',
    },
  ],
  related: [],
};

export default data;
