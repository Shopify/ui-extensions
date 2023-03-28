import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useShop',
  description: 'Returns the `Shop` where the checkout is taking place.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Metadata',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseShopGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
