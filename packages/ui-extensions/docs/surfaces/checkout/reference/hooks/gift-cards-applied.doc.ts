import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useAppliedGiftCards',
  description: '',
  descriptionType: 'UseAppliedGiftCardsGeneratedType',
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
