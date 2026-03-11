import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getHookExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'UI API',
  description: 'The API for interacting with the extension’s UI.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_Ui',
    },
  ],
  defaultExample: getHookExample('ui-close-overlay'),
  examples: {
    description: 'Examples',
    examples: [getExample('ui-close-overlay', ['jsx', 'js'])],
  },
  related: getLinksByTag('apis'),
};

export default data;
