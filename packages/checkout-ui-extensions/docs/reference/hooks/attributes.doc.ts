import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useAttributes',
  description: '',
  descriptionType: 'UseAttributesGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Attributes',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseAttributesGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
