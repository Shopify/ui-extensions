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
    description:
      'Learn how to search for products, fetch product details, and retrieve variants using the native POS search functionality.',
    examples: [
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch a single product by ID',
          'fetch-product-with-id',
        ),
        description:
          'Retrieve complete product information using a known product ID. This example uses `fetchProductWithId()` to get detailed product data including title, variants, and pricing, useful when you need to display or validate specific product information.',
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch a single product variant by ID',
          'fetch-product-variant-with-id',
        ),
        description:
          'Get detailed information about a specific product variant using its variant ID. This example uses `fetchProductVariantWithId()` to retrieve variant-specific data like price, SKU, and inventory, useful for variant-level operations or displaying detailed variant information.',
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch multiple product variants by IDs',
          'fetch-product-variants-with-ids',
        ),
        description:
          'Retrieve multiple product variants at once by providing variant IDs. This example demonstrates using `fetchProductVariantsWithIds()` to efficiently fetch variant details for multiple items, ideal for bulk operations or displaying collections of variants.',
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch multiple products by IDs',
          'fetch-products-with-ids',
        ),
        description:
          'Retrieve multiple products simultaneously by providing an array of product IDs. This example shows how to use `fetchProductsWithIds()` to efficiently fetch several products in a single operation, reducing API calls and improving performance when working with product collections.',
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Fetch paginated variants for a product',
          'fetch-paginated-product-variants-with-product-id',
        ),
        description:
          'Retrieve variants for a product with pagination support to handle products with many variants efficiently. This example shows how to use `fetchPaginatedProductVariantsWithProductId()` with pagination options, allowing you to load variants in manageable chunks and implement infinite scroll or load more functionality.',
      },
      {
        codeblock: generateCodeBlockForProductSearchApi(
          'Search for products with a search bar',
          'search-products',
        ),
        description:
          'Implement product search with a SearchBar component to find products by text query. This example demonstrates using `search()` to perform real-time product searches, displaying results in a list as merchants type, enabling quick product discovery and selection.',
      },
    ],
  },
};

export default data;
