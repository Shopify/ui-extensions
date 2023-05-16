import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useExtensionApi',
  description: '',
  descriptionType: 'UseExtensionApiGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Utilities',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseExtensionApiGeneratedType',
    },
  ],
  defaultExample: getHookExample('api'),
  related: getLinksByTag('apis', 'UseExtensionApiGeneratedType'),
};

export default data;
