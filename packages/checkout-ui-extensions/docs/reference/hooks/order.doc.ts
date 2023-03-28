import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useOrder',
  description: "Returns the order information that's available post-checkout.",
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Orders',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseOrderGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
