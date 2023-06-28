import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useAttributeValues',
  description: '',
  descriptionType: 'UseAttributeValuesGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Attributes',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseAttributeValuesGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
