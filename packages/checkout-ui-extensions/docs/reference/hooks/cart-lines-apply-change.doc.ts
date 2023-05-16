import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApplyCartLinesChange',
  description: '',
  descriptionType: 'UseApplyCartLinesChangeGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Cart',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseApplyCartLinesChangeGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
