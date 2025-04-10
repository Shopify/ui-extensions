import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Localized Fields',
  description: 'The API for interacting with localized fields.',
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_LocalizedFieldsApi',
    },
    {
      title: 'useLocalizedFields',
      description:
        'Returns the current localized fields and re-renders your component if the values change.',
      type: 'UseLocalizedFieldsGeneratedType',
    },
    {
      title: 'useLocalizedField',
      description:
        'Returns the current localized fields and re-renders your component if the values change.',
      type: 'UseLocalizedFieldGeneratedType',
    },
  ],
  defaultExample: getExample('localized-fields/default', ['jsx', 'js']),
  related: getLinksByTag('apis'),
};

export default data;
