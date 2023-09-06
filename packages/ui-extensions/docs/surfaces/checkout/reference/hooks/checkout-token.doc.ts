import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useCheckoutToken',
  description: '',
  descriptionType: 'UseCheckoutTokenGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Checkout Token',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseCheckoutTokenGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
