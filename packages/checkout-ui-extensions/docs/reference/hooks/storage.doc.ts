import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useStorage',
  description: '',
  descriptionType: 'UseStorageGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Storage',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseStorageGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
