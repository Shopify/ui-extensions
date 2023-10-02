import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Shop',
  description: 'The API for interacting with shop.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_ShopApi',
    },
    {
      title: 'useShop',
      description: 'Returns the `shop` where the checkout is taking place.',
      type: 'UseShopGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
