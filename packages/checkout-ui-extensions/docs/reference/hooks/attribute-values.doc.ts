import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

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
  defaultExample: getHookExample('attribute-values'),
  related: getLinksByTag('apis'),
};

export default data;
