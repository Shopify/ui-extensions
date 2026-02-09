import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForProductApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'product-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Product API',
  description:
    'The Product API provides read-only access to product data. Use this API to get product information and build contextual experiences based on the selected product context. The API offers product details for implementing product-specific functionality and workflows.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ProductApi` object provides access to product data. Access these properties through `api.product` to interact with the current product context.',
      type: 'ProductApiContent',
    },
  ],
  examples: {
    description:
      'Learn how to access product information and build contextual experiences based on product context.',
    examples: [
      {
        codeblock: generateCodeBlockForProductApi(
          'Get the current product ID',
          'id',
        ),
        description:
          "Retrieve the unique identifier of the product currently associated with the extension's context. This example shows how to access the product ID from product detail screens, enabling you to fetch additional product data, implement custom actions, or integrate with inventory and pricing systems.",
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
      sectionContent: `\n- **Implement variant-specific features:** Use the variant ID to enable specialized functionality like variant-specific pricing, inventory checks, or cart operations.\n- **Validate product access:** Verify that the product ID and variant ID are valid before performing product-specific operations or external API calls.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- The API provides only basic product identifiers—use Shopify APIs or external systems to fetch additional product details like title, description, pricing, or inventory levels.\n- Product data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.\n`,
    },
  ],
};

export default data;
