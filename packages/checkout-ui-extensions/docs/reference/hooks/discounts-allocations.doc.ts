import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useDiscountAllocations',
  description: '',
  descriptionType: 'UseDiscountAllocationsGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Reductions',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseDiscountAllocationsGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
