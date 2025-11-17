import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForProductSearchApi = (
  title: string,
  fileName: string,
) => generateCodeBlock(title, 'product-search-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'ProductSearch API',
  description:
    'The Product Search API provides access to POS native product search functionality, allowing you to search for products, fetch product details, and retrieve product variants with pagination support and flexible sorting options. The API enables both text-based search and direct product lookups by ID.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ProductSearchApi',
      description:
        'The `ProductSearchApi` object provides methods for searching and fetching product data. Access these methods through `api.productSearch` to perform product searches and lookups.',
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
