import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Session Token API',
  description: 'The API for interacting with session tokens.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_SessionTokenApi',
    },
    {
      title: 'useSessionToken',
      description: 'Returns a the session token API object.',
      type: 'UseSessionTokenGeneratedType',
    },
  ],
  defaultExample: getExample('session-token', ['jsx', 'js']),
  examples: {
    description: '',
    examples: [getExample('session-token-jwt', ['jsx', 'js'])],
  },
  related: getLinksByTag('apis'),
};

export default data;
