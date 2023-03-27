import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useApplyGiftCardChange',
  description: 'Returns a function to add or remove gift cards.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Reductions',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseApplyGiftCardChangeGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
