import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useSessionToken',
  description: '',
  descriptionType: 'UseSessionTokenGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Sessions',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseSessionTokenGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
  defaultExample: getHookExample('session-token'),
  examples: {
    description: '',
    examples: [getHookExample('session-token-jwt')],
  },
};

export default data;
