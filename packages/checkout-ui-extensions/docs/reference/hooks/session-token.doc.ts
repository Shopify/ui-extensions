import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useSessionToken',
  description:
    'Provides access to session tokens, which can be used to validate requests to your app server or supported third-party APIs using the token claims.',
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
