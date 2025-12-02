import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForProductSearchApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'product-search-api', fileName);

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
        'The `ProductSearchApi` object provides methods for searching and retrieving product information. Access these methods through `shopify.productSearch` to search products and fetch detailed product data.',
      type: 'ProductSearchApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Standard APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Implement efficient pagination:** Use appropriate page sizes and cursor-based pagination to balance performance with user experience, especially for large product catalogs.\n' +
        '- **Handle search results gracefully:** Check for undefined results and empty result sets.\n' +
        '- **Optimize search performance:** Consider caching frequently accessed product data and implementing debounced search to reduce API calls while users are typing search queries.\n' +
        '- **Provide relevant search options:** Use appropriate sorting options based on your use case - relevance for user searches, alphabetical for browsing, or recently added for highlighting new products.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Product search results are limited to products available on the current POS device and may not include the complete shop catalog if products aren't synced locally.
- Bulk operations (\`fetchProductsWithIds\` and \`fetchProductVariantsWithIds\`) are limited to 50 items maximum, with additional IDs automatically removed from requests.
`,
    },
  ],
  examples: {
    description:
      'Learn how to search for products, fetch product details, and retrieve variants.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForProductSearchApi(
          'Fetch a single product by ID',
          'fetch-product-with-id',
        ),
        description:
          'Fetch a single product by ID. This example demonstrates using `shopify.productSearch.fetchById()` to get complete product data including variants, pricing, and inventory information for a single product.',
      },
      {
        codeblock: generateJsxCodeBlockForProductSearchApi(
          'Fetch a single variant by ID',
          'fetch-product-variant-with-id',
        ),
        description:
          'Fetch a single variant by ID. This example demonstrates using `shopify.productSearch.fetchVariantById()` to get variant-specific data including pricing, inventory, and options for a particular variant.',
      },
      {
        codeblock: generateJsxCodeBlockForProductSearchApi(
          'Fetch multiple products by IDs',
          'fetch-products-with-ids',
        ),
        description:
          'Fetch multiple products by IDs. This example shows how to use `shopify.productSearch.fetchByIds()` to efficiently fetch data for multiple products in a single request. This improves performance when displaying product lists or related items.',
      },
      {
        codeblock: generateJsxCodeBlockForProductSearchApi(
          'Fetch multiple variants by IDs',
          'fetch-product-variants-with-ids',
        ),
        description:
          'Fetch multiple variants by IDs. This example shows how to use `shopify.productSearch.fetchVariantsByIds()` to efficiently fetch data for multiple variants in a single request. This is useful for displaying variant lists or comparisons.',
      },
      {
        codeblock: generateJsxCodeBlockForProductSearchApi(
          'Fetch paginated variants for a product',
          'fetch-paginated-product-variants-with-product-id',
        ),
        description:
          'Fetch paginated variants for a product. This example demonstrates using `shopify.productSearch.fetchVariantsByProductId()` with pagination parameters to load variants page by page. This improves performance and user experience for products with large variant catalogs.',
      },
      {
        codeblock: generateJsxCodeBlockForProductSearchApi(
          'Search for products using a search bar',
          'search-products',
        ),
        description:
          'Search for products using a search bar. This example shows how to use `shopify.productSearch.search()` to perform text-based product searches with pagination support. This allows users to find products by name, SKU, or other searchable attributes.',
      },
    ],
  },
};

export default data;
