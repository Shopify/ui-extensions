import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApplyCartLinesChange',
  description: 'Returns a function to mutate the `lines` property of checkout.',
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
