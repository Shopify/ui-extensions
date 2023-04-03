import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useDiscountAllocations',
  description:
    'Returns the current discount allocations applied to the cart, and automatically re-renders your component if discount allocations changed.',
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
