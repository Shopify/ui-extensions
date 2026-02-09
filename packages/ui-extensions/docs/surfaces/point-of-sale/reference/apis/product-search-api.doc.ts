import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForProductSearchApi = (
  title: string,
  fileName: string,
) => generateCodeBlock(title, 'product-search-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Product Search API',
  description:
    'The Product Search API provides access to POS native product search functionality, allowing you to search for products, fetch product details, and retrieve product variants with pagination support and flexible sorting options. The API enables both text-based search and direct product lookups by ID.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ProductSearchApi` object provides properties for searching and fetching product data. Access these properties through `api.productSearch` to perform product searches and lookups.',
      type: 'ProductSearchApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Standard APIs',
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

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Handle search results gracefully:** Check for undefined results and empty result sets.\n- **Optimize search performance:** Consider caching frequently accessed product data and implementing debounced search to reduce API calls while users are typing search queries.\n- **Provide relevant search options:** Use appropriate sorting options based on your use case - relevance for user searches, alphabetical for browsing, or recently added for highlighting new products.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Product search results are limited to products available on the current POS device and may not include the complete shop catalog if products aren't synced locally.\n- Bulk operations (\`fetchProductsWithIds\` and \`fetchProductVariantsWithIds\`) are limited to 50 items maximum, with additional IDs automatically removed from requests.\n- Search functionality depends on local product data synchronization and may not reflect real-time inventory or pricing changes until the next sync.\n`,
    },
  ],
};

export default data;
