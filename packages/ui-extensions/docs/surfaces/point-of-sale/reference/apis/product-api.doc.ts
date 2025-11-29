import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForProductApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'product-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Product API',
  description:
    'The Product API provides read-only access to product data. Use this API to get product information and build contextual experiences based on the selected product context. The API offers product details for implementing product-specific functionality and workflows.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ProductApi',
      description:
        'The `ProductApi` object provides access to product data. Access this property through `shopify.product` to interact with the current product context.',
      type: 'ProductApiContent',
    },
  ],
  examples: {
    description:
      'Learn how to access product information in product detail contexts.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForProductApi(
          'Display the product ID',
          'id',
        ),
        description:
          'Access the unique identifier of the current product in a product detail action context. This example shows how to use `shopify.product.id` to retrieve the product ID. This can be used for fetching additional product data, analytics, or implementing product-specific features and workflows.',
      },
      {
        codeblock: generateJsxCodeBlockForProductApi(
          'Retrieve product and product variant IDs',
          'product-variant',
        ),
        description:
          'Access both product and variant identifiers to implement variant-specific functionality. This example shows how to retrieve `shopify.product.id` and `shopify.product.variantId` together. Use this pattern for variant-aware features like inventory checks, variant-specific pricing, or detailed product information displays.',
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Use product ID for data lookups:** Use the product ID to fetch additional product information from external systems, inventory management platforms, or Shopify APIs when building comprehensive product experiences.\n' +
        '- **Implement variant-specific features:** Use the variant ID to enable specialized functionality like variant-specific pricing, inventory checks, or cart operations.\n' +
        '- **Validate product access:** Verify that the product ID and variant ID are valid before performing product-specific operations or external API calls.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Product data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.
`,
    },
  ],
};

export default data;
