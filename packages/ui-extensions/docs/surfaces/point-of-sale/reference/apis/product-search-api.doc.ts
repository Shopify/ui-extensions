import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ProductSearch API',
  description:
    'The ProductSearch API gives extensions  access to the native product search and fetching functionality of Shopify POS. The interface provides numerous functions to search for products by query, or to fetch the details of one or more products or product variants.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ProductSearchApi',
      description: '',
      type: 'ProductSearchApiContent',
    },
  ],
  category: 'APIs',
  related: [],
};

export default data;
