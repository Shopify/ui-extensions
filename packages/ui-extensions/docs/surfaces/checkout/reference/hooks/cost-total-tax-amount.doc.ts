import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useTotalTaxAmount',
  description: '',
  descriptionType: 'UseTotalTaxAmountGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Cart',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseTotalTaxAmountGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
