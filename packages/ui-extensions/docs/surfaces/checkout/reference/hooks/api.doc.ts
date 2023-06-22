import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApi',
  description: '',
  descriptionType: 'UseApiGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Utilities',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseApiGeneratedType',
    },
  ],
  defaultExample: getHookExample('api'),
  related: getLinksByTag('apis', 'UseApiGeneratedType'),
};

export default data;
