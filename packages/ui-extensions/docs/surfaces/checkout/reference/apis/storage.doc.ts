import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Storage',
  description: 'The API for interacting with local storage.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_StorageApi',
    },
    {
      title: 'useStorage',
      description:
        'Returns the key-value `Storage` interface for the extension target.',
      type: 'UseStorageGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
