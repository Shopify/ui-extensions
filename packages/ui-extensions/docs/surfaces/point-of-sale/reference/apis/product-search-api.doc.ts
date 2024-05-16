import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForProductSearchApi = (
  title: string,
  fileName: string,
) => generateCodeBlock(title, 'product-search-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'ProductSearch API',
  description:
    'The ProductSearch API gives extensions access to the native product search and fetching functionality of Shopify POS. The interface provides numerous functions to search for products by query, or to fetch the details of one or more products or product variants.',
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
  examples: {
    description: 'Examples of using the Cart API',
    examples: [
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Search for products with a search bar',
          'search-products',
        ),
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch a specific product with a product ID',
          'fetch-product-with-id',
        ),
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch multiple products by specifying product IDs',
          'fetch-products-with-ids',
        ),
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch a specific product variant with a variant ID',
          'fetch-product-variant-with-id',
        ),
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch multiple product variants by specifying variant IDs',
          'fetch-product-variants-with-ids',
        ),
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch a page of product variants with a specific product ID',
          'fetch-paginated-product-variants-with-product-id',
        ),
      },
    ],
  },
};

export default data;
