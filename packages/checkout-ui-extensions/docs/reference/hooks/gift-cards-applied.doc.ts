import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useAppliedGiftCards',
  description:
    'Returns the current gift cards applied to the cart, and automatically re-renders your component if gift cards are added or removed.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Reductions',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseAppliedGiftCardsGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
