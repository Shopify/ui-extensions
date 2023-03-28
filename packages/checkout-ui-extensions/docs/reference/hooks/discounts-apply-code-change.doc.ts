import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApplyDiscountCodeChange',
  description: 'Returns a function to add or remove discount codes.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Reductions',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseApplyDiscountCodeChangeGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
