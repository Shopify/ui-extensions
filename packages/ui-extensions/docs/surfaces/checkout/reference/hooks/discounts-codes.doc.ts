import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useDiscountCodes',
  description: '',
  descriptionType: 'UseDiscountCodesGeneratedType',
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
