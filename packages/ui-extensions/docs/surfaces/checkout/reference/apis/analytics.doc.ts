import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getExample,
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Analytics API',
  description: 'The API for interacting with web pixels.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_AnalyticsApi',
    },
  ],
  defaultExample: getExample('analytics-publish', ['jsx']),
  examples: {
    description: '',
    examples: [getExample('analytics-visitor', ['jsx'])],
  },
  related: getLinksByTag('apis'),
};

export default data;
