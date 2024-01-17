import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApi()',
  description: '',
  descriptionType: 'UseApiGeneratedType',
  isVisualComponent: false,
  type: 'React Hook',
  category: 'APIs',
  // subCategory: 'Utilities',
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
