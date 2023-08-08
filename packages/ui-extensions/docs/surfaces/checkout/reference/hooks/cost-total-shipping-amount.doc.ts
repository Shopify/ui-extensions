import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useTotalShippingAmount',
  description: '',
  descriptionType: 'UseTotalShippingAmountGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Cart',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseTotalShippingAmountGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
