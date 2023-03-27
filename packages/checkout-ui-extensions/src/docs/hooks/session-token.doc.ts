import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useSessionToken',
  description:
    'Returns a `SessionToken` object, which contains a get() method that can be used to obtain a checkout extension session token.',
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
};

export default data;
