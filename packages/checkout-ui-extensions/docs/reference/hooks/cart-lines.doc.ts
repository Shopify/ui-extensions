import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useCartLines',
  description: '',
  descriptionType: 'UseCartLinesGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Cart',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseCartLinesGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
