import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useTotalAmount',
  description: '',
  descriptionType: 'UseTotalAmountGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Cart',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseTotalAmountGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
