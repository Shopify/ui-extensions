import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Storefront API',
  description: 'Querying the Storefront API.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_QueryApi',
    },
  ],
  defaultExample: getExample('storefront-query-api', ['jsx', 'js']),
  examples: {
    description: '',
    examples: [getExample('storefront-query-with-fetch', ['jsx', 'js'])],
  },
  related: getLinksByTag('apis'),
};

export default data;
