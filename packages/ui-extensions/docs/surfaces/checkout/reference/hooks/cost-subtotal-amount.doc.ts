import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useSubtotalAmount',
  description: '',
  descriptionType: 'UseSubtotalAmountGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Cart',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseSubtotalAmountGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
