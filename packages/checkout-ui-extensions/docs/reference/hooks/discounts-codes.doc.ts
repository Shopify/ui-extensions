import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useDiscountCodes',
  description:
    'Returns the current discount codes applied to the cart, and automatically re-renders your component if discount codes are added or removed.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Reductions',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseDiscountCodesGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
