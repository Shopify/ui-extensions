import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Settings',
  description: 'The API for interacting with merchant settings.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_SettingsApi',
    },
    {
      title: 'useSettings',
      description:
        'Returns the setting values defined by the merchant for the extension.',
      type: 'UseSettingsGeneratedType',
    },
  ],
  defaultExample: getExample('settings-access', ['jsx', 'js']),
  examples: {
    description: '',
    examples: [getExample('settings', ['jsx', 'js'])],
  },
  related: getLinksByTag('apis'),
};

export default data;
