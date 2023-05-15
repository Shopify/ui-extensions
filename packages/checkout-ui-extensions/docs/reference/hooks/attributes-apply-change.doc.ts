import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApplyAttributeChange',
  description: '',
  descriptionType: 'UseApplyAttributeChangeGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Attributes',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseApplyAttributeChangeGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
