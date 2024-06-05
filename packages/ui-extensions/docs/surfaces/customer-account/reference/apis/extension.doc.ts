import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Extension',
  description: 'The API for interacting with the metadata of an extension.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_ExtensionApi',
    },
    {
      title: 'useExtension',
      description: 'Returns the metadata of the extension.',
      type: 'UseExtensionGeneratedType',
    },
    {
      title: 'useExtensionEditor',
      description:
        'Returns information about the editor where the extension is being rendered.',
      type: 'UseExtensionEditorGeneratedType',
    },
  ],
  related: [],
};

export default data;
