import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtensionApi()',
  description: '',
  descriptionType: 'UseExtensionApiGeneratedType',
  isVisualComponent: false,
  type: 'React Hook',
  category: 'APIs',
  // subCategory: 'Utilities',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseExtensionApiGeneratedType',
    },
  ],
  defaultExample: getHookExample('extension-api'),
  related: getLinksByTag('apis', 'UseExtensionApiGeneratedType'),
};

export default data;
